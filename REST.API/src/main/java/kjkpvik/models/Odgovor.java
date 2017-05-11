package kjkpvik.models;

import javax.persistence.*;

/**
 * Created by Siii on 5/8/2017.
 */

@Entity
public class Odgovor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", updatable = false, nullable = false)
    private Long ID;
    private String tekst;

    //veza sa korisnikom
    @OneToOne(fetch = FetchType.LAZY)
    private Korisnik korisnikID;

    // veza sa pitanjem
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Pitanje.class)
    private Pitanje pitanjeID;

    public Odgovor() {
    }

    public Odgovor(String tekst, Korisnik korisnikID, Pitanje pitanjeID) {

        this.tekst = tekst;
        this.korisnikID = korisnikID;
        this.pitanjeID = pitanjeID;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }
    public String getTekst() {
        return tekst;
    }

    public void setTekst(String tekst) {
        this.tekst = tekst;
    }

    public Korisnik getKorisnikID() {
        return korisnikID;
    }

    public void setKorisnikID(Korisnik korisnikID) {
        this.korisnikID = korisnikID;
    }

    public Pitanje getPitanjeID() {
        return pitanjeID;
    }

    public void setPitanjeID(Pitanje pitanjeID) {
        this.pitanjeID = pitanjeID;
    }
}
