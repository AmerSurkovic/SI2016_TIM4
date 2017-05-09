package kjkpvik.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Siii on 5/8/2017.
 */

@Entity
public class Pitanje {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", updatable = false, nullable = false)
    private Long ID;
    private String tekst;

    // veza sa anketom
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Anketa.class)
    private Anketa anketaID;

    //vaza sa odgovorom
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pitanjeID", targetEntity = Odgovor.class)
    private List<Odgovor> odgovori = new ArrayList<>();

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

    public Anketa getAnketaID() {
        return anketaID;
    }

    public void setAnketaID(Anketa anketaID) {
        this.anketaID = anketaID;
    }

    public List<Odgovor> getOdgovori() {
        return odgovori;
    }

    public void setOdgovori(List<Odgovor> odgovori) {
        this.odgovori = odgovori;
    }
}
