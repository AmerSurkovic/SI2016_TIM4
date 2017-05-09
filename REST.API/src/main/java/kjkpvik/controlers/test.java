package kjkpvik.controlers;

import org.springframework.web.HttpRequestHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Siii on 5/9/2017.
 */
//API prema korisnicima
@RestController
@RequestMapping(path="/obavijesti")
public class test {

    @RequestMapping(value = "/all", method = RequestMethod.GET) // prikaz svih oglasa iz kategorije, treba dodati request parameter za odabranu kat.
    public String getAll() {
        return "anisa";
    }


}
