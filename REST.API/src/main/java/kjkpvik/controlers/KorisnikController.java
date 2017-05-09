package kjkpvik.controlers;

import kjkpvik.models.Korisnik;
import kjkpvik.models.Rola;
import kjkpvik.services.KorisnikService;
import kjkpvik.viewmodels.KorisnikVM;
import kjkpvik.viewmodels.RolaVM;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Siii on 5/9/2017.
 */
@RestController
@RequestMapping(path="/korisnik")
public class KorisnikController {

    private KorisnikService korisnikService;
    @Autowired
    public void setService (KorisnikService korisnikService) {
        this.korisnikService = korisnikService;
    }

    @RequestMapping(value = "/kreirajrolu", method = RequestMethod.POST )
    public ResponseEntity dodajRolu(@RequestBody RolaVM rola)
    {
        try {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(korisnikService.dodajRolu(rola));
        }
        catch (ServiceException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }

    @RequestMapping(value = "/kreirajkorisnika", method = RequestMethod.POST )
    public ResponseEntity dodajKorisnika(@RequestBody KorisnikVM korisnikVM)
    {
        try {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(korisnikService.dodajKorisnika(korisnikVM));
        }
        catch (ServiceException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }

    @RequestMapping(value = "/rola", method = RequestMethod.GET)
    public RolaVM getRola() {
         Long var = new Long(1); //hardkodirala, potrebno mi je bilo radi formata

        return korisnikService.getRola( var);
    }


}
