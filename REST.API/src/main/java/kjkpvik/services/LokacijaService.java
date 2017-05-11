package kjkpvik.services;

import kjkpvik.models.Lokacija;
import kjkpvik.models.ZabranjenaRijec;
import kjkpvik.repositories.ILokacijaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import  kjkpvik.viewmodels.LokacijaVM;
import  kjkpvik.viewmodels.ObavijestiVM;

import java.util.List;


/**
 * Created by Siii on 5/9/2017.
 */
@Service
public class LokacijaService {
   @Autowired
   private ILokacijaRepository lokacijaRepository;

    //dodavanje
    public Boolean dodajLokaciju (LokacijaVM lokacija ){//u lokaciji se nalazi lista ObavijestLokacija

        Lokacija mojaLokacija = new Lokacija(lokacija.getNaziv());
        //mojaLokacija.setOl(lokacija.getOl());//?
        Lokacija kreirana = lokacijaRepository.save(mojaLokacija);

        return (kreirana!= null);

    }

    //brisanje
    private Boolean brisiLokaciju (LokacijaVM lokacija){
        List<Lokacija> sveLokacije = (List<Lokacija>) lokacijaRepository.findAll();
        Lokacija x = new Lokacija();

        for (Lokacija y : sveLokacije){
            if (y.getNaziv().equals(lokacija.getNaziv())){
                x=y;
            }
        }

        if (x.getNaziv()==null) {
            return false;
        }
        lokacijaRepository.delete(x);
        return true;




    }

    //get
    public LokacijaVM getLokacija (Long ID){

        LokacijaVM mojaLokacija = new LokacijaVM(lokacijaRepository.findOne(ID).getNaziv());

        if(mojaLokacija != null)
            return  mojaLokacija;
        return  null;
    }
}
