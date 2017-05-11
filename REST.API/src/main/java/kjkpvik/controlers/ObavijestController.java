package kjkpvik.controlers;

import kjkpvik.services.ObavijestiService;
import kjkpvik.viewmodels.ObavijestVM;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Delila on 11.05.2017.
 */
@RestController
@RequestMapping(path="/obavijest")
public class ObavijestController {

    private ObavijestiService obavijestiService;
    @Autowired
    public void SetService (ObavijestiService obavijestService) {this.obavijestiService = obavijestService;}

    //dodaj obavijest
    @RequestMapping(value = "/dodajobavijest", method = RequestMethod.POST )
    public ResponseEntity dodajObavijest(@RequestBody ObavijestVM obavijestVM)
    {
        try {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(obavijestiService.DodajObavijest(obavijestVM));
        }
        catch (ServiceException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }

    //izmijeni obavijest
    @RequestMapping(value = "/update", method = RequestMethod.POST )
    public ResponseEntity update(@RequestBody ObavijestVM obavijestVM)
    {
        try {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(obavijestiService.Update(obavijestVM));
        }
        catch (ServiceException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }

    // prikazi sve obavijesti
    @RequestMapping(value = "/sve", method = RequestMethod.GET)
    public List<ObavijestVM> getObavijesti(){
        return obavijestiService.GetObavijesti();
    }

    // filtriraj obavijesti po lokaciji
    @RequestMapping(value = "/filtriraj", method = RequestMethod.GET)
    public List<ObavijestVM> filtrirajObavijesti(Long lokacijaId){
        return obavijestiService.filtrirajObavijesti(lokacijaId);
    }

    // sortiraj obavijesti po lokaciji
    @RequestMapping(value = "/sortiraj", method = RequestMethod.GET)
    public List<ObavijestVM> sortirajObavijesti(Long lokacijaId){
        return obavijestiService.sortirajObavijesti(lokacijaId);
    }
}
