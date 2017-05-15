package kjkpvik.services;

import kjkpvik.models.*;
import kjkpvik.repositories.IAnketeRepository;
import kjkpvik.repositories.IKorisnikRepository;
import kjkpvik.repositories.IOdgovorRepository;
import kjkpvik.repositories.IPitanjaRepository;
import kjkpvik.viewmodels.AnketaVM;
import kjkpvik.viewmodels.OdgovoriVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Siii on 5/9/2017.
 */
@Service
public class AnketeService {

    @Autowired
    private IAnketeRepository anketaRepository;

    @Autowired
    private IKorisnikRepository korisnikRepository;

    @Autowired
    private IPitanjaRepository pitanjaRepository;

    @Autowired
    private IOdgovorRepository odgovorRepository;

    // prikazi pitanja za anketu tog ID-a, TESTIRANO
    public List<String> prikaziPitanja(Long id){
        List<Pitanje> svaPitanja = (List<Pitanje>) pitanjaRepository.findAll();

        List<String> trazenaPitanja = new ArrayList<String>();
        for(Pitanje x: svaPitanja){
            if(x.getAnketa().getID().equals(id)) {
                trazenaPitanja.add(x.getTekst());
            }
        }
        return trazenaPitanja;
    }

    //add
    public Boolean dodajAnketu(AnketaVM anketa){

        if (anketa.getKorisnik_id()==null) return false;
        Anketa novaAnketa = new Anketa(anketa.getOpis(), anketa.getVrijeme_aktivacije(), anketa.getVrijeme_deaktivacije());
        List<Korisnik> sviKorisnici = (List<Korisnik>) korisnikRepository.findAll();
        for(Korisnik r: sviKorisnici){
            if(r.getID().equals(anketa.getKorisnik_id()));
            novaAnketa.setKorisnik(r);
        }

        List<String> novaPitanja = anketa.getPitanja(); //anketa mora imati barem jedno pitanje
        if(novaPitanja == null)
            return false;

        for(String x: novaPitanja){
            Pitanje novo = new Pitanje(x, novaAnketa);
            pitanjaRepository.save(novo);
        }

        Anketa kreirana = new Anketa();
        if(novaAnketa.getKorisnik().getID() != null) {
            kreirana = anketaRepository.save(novaAnketa);
        }
        return (kreirana != null);
    }


    // daj odgovore na anketu -> za HR za analizu - testirano
    public List<Odgovor> dajOdgovore(Long idAnkete){
        List<Odgovor> sviOdgovori = (List<Odgovor>) odgovorRepository.findAll();
        List<Odgovor> trazeniOdgovori = new ArrayList<Odgovor>();

        for(Odgovor odgovor: sviOdgovori){
            if(odgovor.getPitanje().getAnketa().getID().equals(idAnkete))
                trazeniOdgovori.add(odgovor);
        }

        return trazeniOdgovori;
    }

    //delete - testirano
    public Boolean obrisiAnketu(AnketaVM anketa){

        List<Anketa> sveAnkete = (List<Anketa>) anketaRepository.findAll();
        List<Pitanje> svaPitanja = (List<Pitanje>) pitanjaRepository.findAll();
        List<Odgovor>  sviOdgovori = (List<Odgovor>) odgovorRepository.findAll();

        for(Odgovor x: sviOdgovori)
        {
            if(x.getPitanje().getID().equals(anketa.getID())){
                odgovorRepository.delete(x);
            }
        }

        for(Pitanje x: svaPitanja)
        {
            if(x.getAnketa().getID().equals(anketa.getID())){
                pitanjaRepository.delete(x);
            }
        }

        Anketa a = new Anketa();
        for(Anketa x: sveAnkete)
        {
            if(x.getID().equals(anketa.getID()))
            {
                a = x;
                break;
            }
        }

        if(a == null) return  false;

        anketaRepository.delete(a);

        return true;
    }

    //ispuniti anketu / unesi odgovore
    public Boolean ispuniAnketu(OdgovoriVM odgovor){
        List<String> odgovori = odgovor.getOdgovori();
        List<Long> pitanja = odgovor.getPitanja();

        for(int i=0; i<odgovori.size(); i++){
            odgovorRepository.save(new Odgovor(odgovori.get(i), korisnikRepository.findOne(odgovor.getKorisnik_id()), pitanjaRepository.findOne(pitanja.get(i))));
        }

        return true;
    }
}
