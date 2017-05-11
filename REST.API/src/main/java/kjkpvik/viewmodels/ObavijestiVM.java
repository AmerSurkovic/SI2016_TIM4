package kjkpvik.viewmodels;

import java.util.Date;

/**
<<<<<<< HEAD
 * Created by Mersida on 11.5.2017.
 */
public class ObavijestiVM {

=======
 * Created by Kemal Halilbegović on 10.05.2017..
 */
public class ObavijestiVM {
>>>>>>> efe6e0ef843f3a442e85323509617e7f4ecb8c37
    private String naziv;
    private String tekst;
    private Date vrijemeObjave;
    private Long korisnikID;
<<<<<<< HEAD

=======
>>>>>>> efe6e0ef843f3a442e85323509617e7f4ecb8c37
    public ObavijestiVM(){}
    public ObavijestiVM(String naziv, String tekst, Date vrijemeObjave){
        this.setNaziv(naziv);
        this.setTekst(tekst);
        this.setVrijemeObjave(vrijemeObjave);
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public String getTekst() {
        return tekst;
    }

    public void setTekst(String tekst) {
        this.tekst = tekst;
    }

    public Date getVrijemeObjave() {
        return vrijemeObjave;
    }

    public void setVrijemeObjave(Date vrijemeObjave) {
        this.vrijemeObjave = vrijemeObjave;
    }

    public Long getKorisnikID() {
        return korisnikID;
    }

    public void setKorisnikID(Long korisnikID) {
        this.korisnikID = korisnikID;
    }
}
