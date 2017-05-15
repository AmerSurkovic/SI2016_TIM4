package kjkpvik.controlers;

import kjkpvik.services.AnketeService;
import kjkpvik.viewmodels.AnketaVM;
import kjkpvik.viewmodels.OdgovoriVM;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Sumejja on 10.05.2017..
 */
@RestController
@RequestMapping(path="/anketa")
public class AnketaController {

    private AnketeService anketeService;
    @Autowired
    public void setService (AnketeService anketeService) {
        this.anketeService = anketeService;
    }

    @RequestMapping(value = "/kreirajanketu", method = RequestMethod.POST )
    public ResponseEntity dodajAnketu(@RequestBody AnketaVM anketa)
    {
        try {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(anketeService.dodajAnketu(anketa));
        }
        catch (ServiceException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }

    @RequestMapping(value = "/prikazipitanja/{id}", method = RequestMethod.GET )
    public ResponseEntity prikaziPitanja(@PathVariable Long id){

        try{
            return  ResponseEntity.status(HttpStatus.OK)
                    .body(anketeService.prikaziPitanja(id));
        }
        catch (ServiceException e){
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }

    @RequestMapping(value = "/obrisianketu", method = RequestMethod.POST )
    public ResponseEntity obrisiAnketu(@RequestBody AnketaVM anketa){

        try{
            return  ResponseEntity.status(HttpStatus.OK)
                    .body(anketeService.obrisiAnketu(anketa));
        }
        catch (ServiceException e){
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }

    @RequestMapping(value = "/{id}/odgovori", method = RequestMethod.GET )
    public ResponseEntity dajOdgovore(@PathVariable Long id){ // id ankete

        try{
            return  ResponseEntity.status(HttpStatus.OK)
                    .body(anketeService.dajOdgovore(id));
        }
        catch (ServiceException e){
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }

    @RequestMapping(value = "/ispunianketu", method = RequestMethod.POST )
    public ResponseEntity ispuniAnketu(@RequestBody OdgovoriVM odgovori){

        try{
            return  ResponseEntity.status(HttpStatus.OK)
                    .body(anketeService.ispuniAnketu(odgovori));
        }
        catch (ServiceException e){
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }
}
