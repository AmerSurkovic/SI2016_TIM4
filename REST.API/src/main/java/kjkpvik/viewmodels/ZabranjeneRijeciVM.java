package kjkpvik.viewmodels;

/**
 * Created by Kemal Halilbegović on 10.05.2017..
 */
public class ZabranjeneRijeciVM {
    private String rijec;
    private Long korisnikID;
    public ZabranjeneRijeciVM(){}
    public ZabranjeneRijeciVM(String rijec){
        this.setRijec(rijec);
    }
    public ZabranjeneRijeciVM(String rijec,KorisnikVM korisnik){
        this.setRijec(rijec);
        this.setKorisnikID(korisnik.getID());
    }

    public String getRijec() {
        return rijec;
    }

    public void setRijec(String rijec) {
        this.rijec = rijec;
    }

    public Long getKorisnikID() {
        return korisnikID;
    }

    public void setKorisnikID(Long korisnikID) {
        this.korisnikID = korisnikID;
    }
}
