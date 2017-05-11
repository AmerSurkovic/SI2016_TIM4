package kjkpvik.controlers;

import kjkpvik.services.ZabranjeneRijeciService;
import kjkpvik.viewmodels.ZabranjeneRijeciVM;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Kemal Halilbegović on 11.05.2017..
 */
@RestController
@RequestMapping(path = "/zrijeci")
public class ZabranjeneRijeciController {
    private ZabranjeneRijeciService zabranjeneRijeciService;
    @Autowired
    public void setService(ZabranjeneRijeciService zabranjeneRijeciService){
        this.zabranjeneRijeciService = zabranjeneRijeciService;
    }
    @RequestMapping(value = "/kreiraj", method = RequestMethod.POST)
    public ResponseEntity dodajRijec(@RequestBody ZabranjeneRijeciVM rijec)
    {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(zabranjeneRijeciService.dodajZabranjenuRijec(rijec));
        }
        catch(ServiceException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public ResponseEntity getRijec(@RequestParam("ID")Long id)
    {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(zabranjeneRijeciService.getZabranjenaRijec(id));
        }
        catch(ServiceException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }
    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    public ResponseEntity deleteRijec(@RequestBody ZabranjeneRijeciVM rijec)
    {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(zabranjeneRijeciService.deleteZabranjenuRijec(rijec));
        }
        catch(ServiceException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }
}
