package kjkpvik.viewmodels;

import kjkpvik.models.Pitanje;

import java.util.Date;
import java.util.List;

/**
 * Created by Sumejja on 10.05.2017..
 */
public class AnketaVM {
    private Long ID;
    private String opis;
    private Date vrijeme_aktivacije;
    private Date vrijeme_deaktivacije;
    private Long korisnik_id;
    private List<String> pitanja;

    public AnketaVM() {}

    public AnketaVM(Long ID, String opis, Date vrijeme_aktivacije, Date vrijeme_deaktivacije, Long korisnik_id){
        this.ID = ID;
        this.opis = opis;
        this.vrijeme_aktivacije = vrijeme_aktivacije;
        this.vrijeme_deaktivacije = vrijeme_deaktivacije;
        this.korisnik_id = korisnik_id;

    }

    public AnketaVM(Long ID, String opis, Date vrijeme_aktivacije, Date vrijeme_deaktivacije, Long korisnik_id, List<String> pitanja){
        this.ID = ID;
        this.opis = opis;
        this.vrijeme_aktivacije = vrijeme_aktivacije;
        this.vrijeme_deaktivacije = vrijeme_deaktivacije;
        this.korisnik_id = korisnik_id;
        this.pitanja = pitanja;

    }

    public Long getID() {
        return ID;
    }

    public String getOpis() {
        return opis;
    }

    public Date getVrijeme_aktivacije() {
        return vrijeme_aktivacije;
    }

    public Date getVrijeme_deaktivacije() {
        return vrijeme_deaktivacije;
    }

    public Long getKorisnik_id() {
        return korisnik_id;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public void setVrijeme_aktivacije(Date vrijeme_aktivacije) {
        this.vrijeme_aktivacije = vrijeme_aktivacije;
    }

    public void setVrijeme_deaktivacije(Date vrijeme_deaktivacije) {
        this.vrijeme_deaktivacije = vrijeme_deaktivacije;
    }

    public void setKorisnik_id(Long korisnik_id) {
        this.korisnik_id = korisnik_id;
    }

    public List<String> getPitanja() {
        return pitanja;
    }

    public void setPitanja(List<String> pitanja) {
        this.pitanja = pitanja;
    }

}
