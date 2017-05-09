package kjkpvik.models;

/**
 * Created by Siii on 5/8/2017.
 */

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Obavijest {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", updatable = false, nullable = false)
    private long ID;
    private String naziv;
    private String tekst;
    private Date vrijemeObjave;

    // veza sa korisnikom
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Korisnik.class)
    private Korisnik korisnikID;

    //veza sa obavijestLokacija
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "obavijestID", targetEntity = ObavijestLokacija.class)
    private List<ObavijestLokacija> lokacije = new ArrayList<>();


    public long getID() {
        return ID;
    }

    public void setID(long ID) {
        this.ID = ID;
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

    public Korisnik getKorisnikID() {
        return korisnikID;
    }

    public void setKorisnikID(Korisnik korisnikID) {
        this.korisnikID = korisnikID;
    }

    public List<ObavijestLokacija> getLokacije() {
        return lokacije;
    }

    public void setLokacije(List<ObavijestLokacija> lokacije) {
        this.lokacije = lokacije;
    }
}
