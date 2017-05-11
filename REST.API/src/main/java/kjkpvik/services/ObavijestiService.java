
package kjkpvik.services;

import kjkpvik.models.Korisnik;
import kjkpvik.models.Obavijest;
import kjkpvik.models.ObavijestLokacija;
import kjkpvik.repositories.IKorisnikRepository;
import kjkpvik.repositories.IObavijestiRepository;
import kjkpvik.viewmodels.ObavijestVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

/**
 * Created by Siii on 5/9/2017.
 */
//OVO USLUZUJE KONTROLERU
@Service
public class ObavijestiService {

    @Autowired
    private IObavijestiRepository iObavijestiRepository;
    private IKorisnikRepository ikorisnikRepository;

    public String GetObavijesti(){ return "anisaaaaaaaa";}

    public boolean Update(ObavijestVM obavijest)
    {
        List<Obavijest> obavijesti = (List<Obavijest>) iObavijestiRepository.findAll();
        Obavijest stara;
        stara = iObavijestiRepository.findOne(obavijest.getID());
        iObavijestiRepository.delete(stara);
        Obavijest kreirana = iObavijestiRepository.save( new Obavijest(obavijest.getNaziv(), obavijest.getTekst(),obavijest.getVrijemeObjave(),ikorisnikRepository.findOne(obavijest.getKorisnikID())));
        return (kreirana != null);
    }

    public void Delete(){};
/*    public Boolean dodajZabranjenuRijec(ZabranjeneRijeciVM rijec){//unutar ovoga se nalazi i korisnikID

        ZabranjenaRijec zabranjenaRijec = new ZabranjenaRijec(rijec.getRijec());
        zabranjenaRijec.setKorisnikID(korisnikRepository.findOne(rijec.getKorisnikID()));
        ZabranjenaRijec kreirana = zabranjeneRijeciRepository.save(zabranjenaRijec);

        return (kreirana!=null);
    }*/
    public boolean DodajObavijest(ObavijestVM obavijesti){
        Korisnik korisnik = ikorisnikRepository.findOne(obavijesti.getKorisnikID());
        Obavijest obavijest=new Obavijest(obavijesti.getNaziv(),obavijesti.getTekst(),obavijesti.getVrijemeObjave(),korisnik);
        Obavijest kreirana = iObavijestiRepository.save(obavijest);
        return (kreirana != null);
    }

    public List<ObavijestVM> filtrirajObavijesti(Long lokacijaId){
        Sort sortiraj=new Sort(Sort.Direction.DESC, "vrijemeObjave");
        List<Obavijest> obavijesti=(List<Obavijest>)iObavijestiRepository.findAll(sortiraj);
        obavijesti=obavijesti.stream().filter(imaLokaciju(lokacijaId)).collect(Collectors.toList());
        return obavijestiVMlista(obavijesti);
    }

    private static Predicate<Obavijest> imaLokaciju(Long lokacijaId){
        return o->imaLokacijaUListi(o.getLokacije(), lokacijaId);
    }

    private static Boolean imaLokacijaUListi(List<ObavijestLokacija> lokacije, Long lokacijaId){
        List<ObavijestLokacija> pomLokacije=lokacije.stream().filter(imaLokacijuID(lokacijaId)).collect(Collectors.toList());
        return pomLokacije.size()!=0;
    }

    private static Predicate<ObavijestLokacija> imaLokacijuID(Long lokacijaId){
        return l->l.getLokacijaID().getID().equals(lokacijaId);
    }

    // ovo se odnosi na onu odabranu lokaciju
    // ja sam to ovako nekako skontao
    public List<ObavijestVM> sortirajObavijesti(Long lokacijaId){
        List<Obavijest> obavijesti=(List<Obavijest>) iObavijestiRepository.findAll();

        Comparator<Obavijest> poredi=new Comparator<Obavijest>() {
            @Override
            public int compare(Obavijest o1, Obavijest o2) {
                Date d1=(Date) o1.getVrijemeObjave().clone();
                Date d2=(Date) o2.getVrijemeObjave().clone();

                d1.setDate(d1.getDate()+1);
                d2.setDate(d2.getDate()+1);

                if(o1.getVrijemeObjave().compareTo(d2)==1){
                    return -1;
                }
                else if(o2.getVrijemeObjave().compareTo(d1)==1){
                    return 1;
                }

                Boolean b1=imaLokacijaUListi(o1.getLokacije(), lokacijaId);
                Boolean b2=imaLokacijaUListi(o2.getLokacije(), lokacijaId);

                if((b1 && b2) || (!b1 && !b2)){
                    return o2.getVrijemeObjave().compareTo(o1.getVrijemeObjave());
                }
                else if(b1){
                    return -1;
                }
                else{
                    return 1;
                }
            }
        };

        obavijesti.sort(poredi);

        return obavijestiVMlista(obavijesti);
    }

    private List<ObavijestVM> obavijestiVMlista(List<Obavijest> obavijesti){
        List<ObavijestVM> obavijestiVM=new ArrayList<ObavijestVM>();
        for(Obavijest o:obavijesti){
            obavijestiVM.add(new ObavijestVM(o));
        }
        return obavijestiVM;
    }

}

