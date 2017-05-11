package kjkpvik.services;

import kjkpvik.models.Obavijest;
import kjkpvik.repositories.IObavijestiRepository;
import kjkpvik.viewmodels.ObavijestiVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Siii on 5/9/2017.
 */
//OVO USLUZUJE KONTROLERU
@Service
public class ObavijestiService {

    @Autowired
    private IObavijestiRepository iObavijestiRepository;

    public String GetObavijesti(){ return "anisaaaaaaaa";}

    public void Update(){};

    public void Delete(ObavijestiVM obavijest){
        

    };

    public void DodajObavijest(){};

    public void FiltrirajObavijesti(){};

}
