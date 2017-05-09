package kjkpvik.models;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Siii on 5/8/2017.
 */

@Entity
public class Zalba {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", updatable = false, nullable = false)
    private Long ID;
    private Date vrijemePostavljanja;
    private String tekst;
    private Boolean privatna;

    // veza sa korisnikom
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Korisnik.class)
    private Korisnik korisnikID;

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public Date getVrijemePostavljanja() {
        return vrijemePostavljanja;
    }

    public void setVrijemePostavljanja(Date vrijemePostavljanja) {
        this.vrijemePostavljanja = vrijemePostavljanja;
    }

    public String getTekst() {
        return tekst;
    }

    public void setTekst(String tekst) {
        this.tekst = tekst;
    }

    public Boolean getPrivatna() {
        return privatna;
    }

    public void setPrivatna(Boolean privatna) {
        this.privatna = privatna;
    }

    public Korisnik getKorisnikID() {
        return korisnikID;
    }

    public void setKorisnikID(Korisnik korisnikID) {
        this.korisnikID = korisnikID;
    }
}
