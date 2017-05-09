package kjkpvik.services;

import kjkpvik.models.Korisnik;
import kjkpvik.models.Rola;
import kjkpvik.repositories.IKorisnikRepository;
import kjkpvik.repositories.IObavijestiRepository;
import kjkpvik.repositories.IRolaRepository;
import kjkpvik.viewmodels.KorisnikVM;
import kjkpvik.viewmodels.RolaVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Siii on 5/9/2017.
 */
@Service
public class KorisnikService {

    @Autowired
    private IRolaRepository rolaRepository;
    @Autowired
    private IKorisnikRepository korisnikRepository;

    //regisracija -> dodavanje

    //dodavanje role
    public Boolean dodajRolu(RolaVM rola){

        Rola mojaRola = new Rola(rola.getNaziv());
        Rola kreirana = rolaRepository.save(mojaRola);

        return (kreirana != null);

    }

    public RolaVM getRola(Long ID) {

        RolaVM mojaRola = new RolaVM(rolaRepository.findOne(ID).getNaziv());

        if(mojaRola != null)
            return  mojaRola;
        return  null;
    }

    public Boolean dodajKorisnika(KorisnikVM korisnikVM){

        // validacija emaila

        Korisnik mojKorisnik = new Korisnik(korisnikVM.getUsername(), korisnikVM.getPassword(), korisnikVM.getEmail());
        List<Rola> sveRole = (List<Rola>) rolaRepository.findAll();
        Rola x = new Rola();
        for(Rola r : sveRole)
        {
            if(r.getNaziv().equals("Korisnik"))
                x = r;
        }
        if(x.getNaziv() == null)
        {
            Rola mojaRola = new Rola("Korisnik");
            Rola kreirana = rolaRepository.save(mojaRola);
            x = kreirana;
        }
        // ovdje treba jos malo validacije
        mojKorisnik.setRolaID(x); // hardkodirano
        Korisnik kreiran = korisnikRepository.save(mojKorisnik);

        return (kreiran != null);

    }

    //edit -> mozda

    //login
}
