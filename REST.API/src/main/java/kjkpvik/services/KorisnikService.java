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

    public boolean isValidEmailAddress(String email) {
        String ePattern = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])";
        java.util.regex.Pattern p = java.util.regex.Pattern.compile(ePattern);
        java.util.regex.Matcher m = p.matcher(email);
        return m.matches();
    }



    public Boolean dodajKorisnika(KorisnikVM korisnikVM){

        if(korisnikVM == null || !isValidEmailAddress(korisnikVM.getEmail()))
            return false;

        // fali ispitivanje za postojanje istog korisnika

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

        mojKorisnik.setRolaID(x);
        Korisnik kreiran = korisnikRepository.save(mojKorisnik);

        return (kreiran != null);

    }

    //edit -> mozda

    //login
}
