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

/**
 * Created by Delila on 11.05.2017.
 */
@RestController
@RequestMapping(path="/obavijest")
public class ObavijestController {

    private ObavijestiService obavijestService;
    @Autowired
    public void SetService (ObavijestiService obavijestService) {this.obavijestService = obavijestService;}

    //dodaj obavijest
    @RequestMapping(value = "/dodajobavijest", method = RequestMethod.POST )
    public ResponseEntity dodajObavijest(@RequestBody ObavijestVM obavijestVM)
    {
        try {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(obavijestService.DodajObavijest(obavijestVM));
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
                    .body(obavijestService.Update(obavijestVM));
        }
        catch (ServiceException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }
}
