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
    private Korisnik korisnikID;

    // veza sa pitanjem
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "anketaID", targetEntity = Pitanje.class)
    private List<Korisnik> pitanja = new ArrayList<>();

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

    public Korisnik getKorisnikID() {
        return korisnikID;
    }

    public void setKorisnikID(Korisnik korisnikID) {
        this.korisnikID = korisnikID;
    }

    public List<Korisnik> getPitanja() {
        return pitanja;
    }

    public void setPitanja(List<Korisnik> pitanja) {
        this.pitanja = pitanja;
    }
}
