package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

var db *sql.DB
var err error

func konekDB() {
	db, err = sql.Open("mysql",
		"root:@tcp(127.0.0.1:3306)/db_2200755_halima_uas_pilkomb")
	if err != nil {
		panic(err.Error())
	}
}

type Book struct {
	Id                   string `json:"id"`
	Judul_Buku           string `json:"judul_buku"`
	Jumlah               int    `json:"jumlah"`
	Nama_Peminjam        string `json:"nama_peminjam"`
	Alamat_Peminjam      string `json:"alamat_peminjam"`
	No_Hp_Peminjam       string `json:"noHp_peminjam"`
	Tanggal_Pinjam       string `json:"tanggal_pinjam"`
	Tanggal_Pengembalian string `json:"tanggal_pengembalian"`
	Lama_Pinjam          string `json:"lama_pinjam"`
}

func main() {
	Routers()
}

func Routers() {
	konekDB()
	defer db.Close()
	log.Println("Starting the HTTP server on port 9080")
	router := mux.NewRouter()
	router.HandleFunc("/inventory", CreateBook).Methods("POST")
	router.HandleFunc("/inventory", GetBook).Methods("GET")
	router.HandleFunc("/inventory/{id}", GetBookById).Methods("GET")
	router.HandleFunc("/inventory/{id}", UpdateBook).Methods("PUT")
	router.HandleFunc("/inventory/{id}", DeleteBook).Methods("DELETE")
	http.ListenAndServe(":9080",
		&CORSRouterDecorator{router})
}

/***************************************************/

// (CreateBook)
func CreateBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	stmt, err := db.Prepare("INSERT INTO peminjamanbuku_halima(judul_buku, jumlah, nama_peminjam, alamat_peminjam,noHp_peminjam,tanggal_pinjam,tanggal_pengembalian,lama_pinjam) VALUES (?,?,?,?,?,?,?,?)")
	if err != nil {
		panic(err.Error())
	}
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err.Error())
	}
	keyVal := make(map[string]string)
	json.Unmarshal(body, &keyVal)
	judul_buku := keyVal["judul_buku"]
	jumlah := keyVal["jumlah"]
	nama_peminjam := keyVal["nama_peminjam"]
	alamat_peminjam := keyVal["alamat_peminjam"]
	noHp_peminjam := keyVal["noHp_peminjam"]
	tanggal_pinjam := keyVal["tanggal_pinjam"]
	tanggal_pengembalian := keyVal["tanggal_pengembalian"]
	lama_pinjam := keyVal["lama_pinjam"]

	_, err = stmt.Exec(judul_buku, jumlah, nama_peminjam, alamat_peminjam, noHp_peminjam, tanggal_pinjam, tanggal_pengembalian, lama_pinjam)
	if err != nil {
		panic(err.Error())
	}
	fmt.Fprintf(w, "New Book Entry Was Added")
}

// (GetBook)
func GetBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var books []Book

	result, err := db.Query("SELECT id, judul_buku, jumlah, nama_peminjam, alamat_peminjam,noHp_peminjam,tanggal_pinjam,tanggal_pengembalian,lama_pinjam from peminjamanbuku_halima")
	if err != nil {
		panic(err.Error())
	}
	defer result.Close()
	for result.Next() {
		var book Book
		err := result.Scan(&book.Id, &book.Judul_Buku, &book.Jumlah, &book.Nama_Peminjam, &book.Alamat_Peminjam, &book.No_Hp_Peminjam, &book.Tanggal_Pinjam, &book.Tanggal_Pengembalian, &book.Lama_Pinjam)
		if err != nil {
			panic(err.Error())
		}
		books = append(books, book)
	}
	json.NewEncoder(w).Encode(books)
}

// (Get Book By Id)
func GetBookById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	result, err := db.Query("SELECT id, judul_buku, jumlah, nama_peminjam, alamat_peminjam,noHp_peminjam,tanggal_pinjam,tanggal_pengembalian,lama_pinjam from peminjamanbuku_halima WHERE id = ?", params["id"])
	if err != nil {
		panic(err.Error())
	}
	defer result.Close()
	var book Book
	for result.Next() {
		err := result.Scan(&book.Id, &book.Judul_Buku, &book.Jumlah, &book.Nama_Peminjam, &book.Alamat_Peminjam, &book.No_Hp_Peminjam, &book.Tanggal_Pinjam, &book.Tanggal_Pengembalian, &book.Lama_Pinjam)
		if err != nil {
			panic(err.Error())
		}
	}
	json.NewEncoder(w).Encode(book)
}

// (Put Book/Update)
func UpdateBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	stmt, err := db.Prepare("UPDATE peminjamanbuku_halima SET judul_buku = ?, jumlah = ?, nama_peminjam = ?, alamat_peminjam = ?,noHp_peminjam = ?,tanggal_pinjam = ?,tanggal_pengembalian = ?,lama_pinjam = ? WHERE id =?")
	if err != nil {
		panic(err.Error())
	}
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err.Error())
	}
	keyVal := make(map[string]string)
	json.Unmarshal(body, &keyVal)
	judul_buku := keyVal["judul_buku"]
	jumlah := keyVal["jumlah"]
	nama_peminjam := keyVal["nama_peminjam"]
	alamat_peminjam := keyVal["alamat_peminjam"]
	noHp_peminjam := keyVal["noHp_peminjam"]
	tanggal_pinjam := keyVal["tanggal_pinjam"]
	tanggal_pengembalian := keyVal["tanggal_pengembalian"]
	lama_pinjam := keyVal["lama_pinjam"]
	_, err = stmt.Exec(judul_buku, jumlah, nama_peminjam, alamat_peminjam, noHp_peminjam, tanggal_pinjam, tanggal_pengembalian, lama_pinjam, params["id"])
	if err != nil {
		panic(err.Error())
	}
	fmt.Fprintf(w, "Peminjam Dengan Id = %s Telah Diubah", params["id"])

}

// Delete Inventory
func DeleteBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	stmt, err := db.Prepare("DELETE FROM peminjamanbuku_halima WHERE id = ?")
	if err != nil {
		panic(err.Error())
	}
	_, err = stmt.Exec(params["id"])
	if err != nil {
		panic(err.Error())
	}
	fmt.Fprintf(w, "Peminjam Dengan Id = %s Sudah Terhapus",
		params["id"])
}

/***************************************************/

// CORSRouterDecorator applies CORS headers to a mux.Router
type CORSRouterDecorator struct {
	R *mux.Router
}

func (c *CORSRouterDecorator) ServeHTTP(rw http.ResponseWriter,
	req *http.Request) {
	if origin := req.Header.Get("Origin"); origin != "" {
		rw.Header().Set("Access-Control-Allow-Origin", origin)
		rw.Header().Set("Access-Control-Allow-Methods",
			"POST, GET, PUT, OPTIONS, DELETE")
		rw.Header().Set("Access-Control-Allow-Headers",
			"Accept, Accept-Language,"+
				" Content-Type, YourOwnHeader")
	}
	if req.Method == "OPTIONS" {
		return
	}

	c.R.ServeHTTP(rw, req)
}
