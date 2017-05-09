package kjkpvik.models;

import javax.persistence.*;

/**
 * Created by Siii on 5/8/2017.
 */
@Entity
public class ObavijestLokacija {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", updatable = false, nullable = false)
    private Long ID;
    //veza sa obavijest
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Obavijest.class)
    private Obavijest obavijestID;

    //veza sa lokacija
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Lokacija.class)
    private Lokacija lokacijaID;

    public Obavijest getObavijestID() {
        return obavijestID;
    }

    public void setObavijestID(Obavijest obavijestID) {
        this.obavijestID = obavijestID;
    }

    public Lokacija getLokacijaID() {
        return lokacijaID;
    }

    public void setLokacijaID(Lokacija lokacijaID) {
        this.lokacijaID = lokacijaID;
    }
}
