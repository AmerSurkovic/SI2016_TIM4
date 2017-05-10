package kjkpvik.services;

import kjkpvik.models.Korisnik;
import kjkpvik.models.Obavijest;
import kjkpvik.models.ZabranjenaRijec;
import kjkpvik.repositories.IKorisnikRepository;
import kjkpvik.repositories.IObavijestiRepository;
import kjkpvik.viewmodels.ObavijestiVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void Update(){};

    public void Delete(){};
/*    public Boolean dodajZabranjenuRijec(ZabranjeneRijeciVM rijec){//unutar ovoga se nalazi i korisnikID

        ZabranjenaRijec zabranjenaRijec = new ZabranjenaRijec(rijec.getRijec());
        zabranjenaRijec.setKorisnikID(korisnikRepository.findOne(rijec.getKorisnikID()));
        ZabranjenaRijec kreirana = zabranjeneRijeciRepository.save(zabranjenaRijec);

        return (kreirana!=null);
    }*/
    public boolean DodajObavijest(ObavijestiVM obavijesti){
        Korisnik korisnik = ikorisnikRepository.findOne(obavijesti.getKorisnikID());
        Obavijest obavijest=new Obavijest(obavijesti.getNaziv(),obavijesti.getTekst(),obavijesti.getVrijemeObjave(),korisnik);
        Obavijest kreirana = iObavijestiRepository.save(obavijest);
        return (kreirana != null);
    }

    public void FiltrirajObavijesti(){};

}
