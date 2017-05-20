package kjkpvik.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Siii on 5/8/2017.
 */
@Entity
public class Anketa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", updatable = false, nullable = false)
    private  Long ID;
    private String opis;
    private Date vrijemeAktivacije;
    private Date vrijemeDeaktivacije;

    // veza sa korisnikom
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Korisnik.class)
    private Korisnik korisnik;

    // veza sa pitanjem
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "anketa", targetEntity = Pitanje.class)
    private List<Korisnik> pitanja = new ArrayList<>();

    public Anketa() {
    }

    public Anketa(String opis, Date vrijemeAktivacije, Korisnik korisnik, List<Korisnik> pitanja) {

        this.opis = opis;
        this.vrijemeAktivacije = vrijemeAktivacije;
        this.korisnik = korisnik;
        this.pitanja = pitanja;
    }
    public Anketa(String opis, Date vrijemeAktivacije, Date vrijemeDeaktivacije, Korisnik korisnik) {

        this.opis = opis;
        this.vrijemeAktivacije = vrijemeAktivacije;
        this.korisnik = korisnik;
        this.vrijemeDeaktivacije = vrijemeDeaktivacije;
    }

    public Anketa(String opis, Date vrijemeAktivacije, Date vrijemeDeaktivacije) {

        this.opis = opis;
        this.vrijemeAktivacije = vrijemeAktivacije;
        this.vrijemeDeaktivacije = vrijemeDeaktivacije;
    }
    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public Date getVrijemeAktivacije() {
        return vrijemeAktivacije;
    }

    public void setVrijemeAktivacije(Date vrijemeAktivacije) {
        this.vrijemeAktivacije = vrijemeAktivacije;
    }

    public Date getVrijemeDeaktivacije() {
        return vrijemeDeaktivacije;
    }

    public void setVrijemeDeaktivacije(Date vrijemeDeaktivacije) {
        this.vrijemeDeaktivacije = vrijemeDeaktivacije;
    }

    public Korisnik getKorisnik() {
        return korisnik;
    }

    public void setKorisnik(Korisnik korisnik) {
        this.korisnik = korisnik;
    }

    public List<Korisnik> getPitanja() {
        return pitanja;
    }

    public void setPitanja(List<Korisnik> pitanja) {
        this.pitanja = pitanja;
    }
}
