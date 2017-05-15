package kjkpvik.models;

import javax.persistence.*;

/**
 * Created by Siii on 5/8/2017.
 */
@Entity
public class ZabranjenaRijec {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", updatable = false, nullable = false)
    private Long ID;
    private String rijec;

    // veza sa korisnikom
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Korisnik.class)
    private Korisnik korisnik;

    public ZabranjenaRijec() {
    }

    public ZabranjenaRijec(String rijec) {

        this.rijec = rijec;
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getRijec() {
        return rijec;
    }

    public void setRijec(String rijec) {
        this.rijec = rijec;
    }

    public Korisnik getKorisnik() {
        return korisnik;
    }

    public void setKorisnik(Korisnik korisnik) {
        this.korisnik = korisnik;
    }
}
