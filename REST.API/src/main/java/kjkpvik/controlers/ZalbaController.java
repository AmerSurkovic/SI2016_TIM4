package kjkpvik.controlers;

import kjkpvik.services.ZalbaService;
import kjkpvik.viewmodels.ZalbaVM;
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
 * Created by Dell on 10.5.2017..
 */

@RestController
@RequestMapping(path = "/zalbe")
public class ZalbaController {
    private ZalbaService zalbaService;

    @Autowired
    public void setZalbaService(ZalbaService zalbaService) {
        this.zalbaService = zalbaService;
    }

    // get

    @RequestMapping(value = "/prikazi_zalbe", method = RequestMethod.GET)
    public List<ZalbaVM> getZalbe() {
        return zalbaService.getZalbe();
    }

    // filtriraj

    @RequestMapping(value = "/prikazi_privatne_zalbe", method = RequestMethod.GET)
    public List<ZalbaVM> getPrivatneZalbe() {
        return zalbaService.getPrivatneZalbe();
    }

    @RequestMapping(value = "/prikazi_javne_zalbe", method = RequestMethod.GET)
    public List<ZalbaVM> getJavneZalbe() {
        return zalbaService.getJavneZalbe();
    }

    // add

    @RequestMapping(value = "/dodaj_zalbu", method = RequestMethod.POST )
    public ResponseEntity dodajZalbu(@RequestBody ZalbaVM zalba)
    {
        try {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(zalbaService.dodajZalbu(zalba));
        }
        catch (ServiceException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getLocalizedMessage());
        }
    }
}
