import React, { Component } from "react";
import Swal from 'sweetalert2';
import InventoryService from "../services/InventoryService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";

class ListInventoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks() {
    InventoryService.getBooks().then((res) => {
      if (!res.data) {
        this.props.history.push("/add-book/_add");
      } else {
        this.setState({ books: res.data });
      }
    });
  }

  CreateBook = () => {
    this.props.history.push("/add-book/_add");
  };

  PopUpdeleteBook(id) {
		Swal.fire({
		  title: 'Hapus Peminjam?',
		  text: 'Anda tidak akan dapat mengembalikan peminjam ini!',
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonText: 'Ya',
		  cancelButtonText: 'Tidak',
		}).then((result) => {
		  if (result.isConfirmed) {
			this.deleteBook(id);
		  }
		});
	  }

  deleteBook(id) {
    InventoryService.deleteBook(id).then((res) => {
      this.setState({
        books: this.state.books.filter((book) => book.id !== id),
      });
    });
  }

  viewBook(id) {
    this.props.history.push(`/view-book/${id}`);
  }

  editBook(id) {
    this.props.history.push(`/add-book/${id}`);
  }

  render() {
    return (
      <div className="bungkusUtama">
        <div className="bungkusTitle">
        </div>
        <br></br>
        <div className="row">
        <h2 className="title">Data Peminjam Buku Perpustakaan</h2>
          <button className="btn btn-Create" onClick={this.CreateBook}>
            Pinjam Buku
          </button>
          <table>
            <thead>
              <tr>
                <th>Judul Buku</th>
                <th className="JdlA">Jumlah</th>
                <th>Nama Peminjam</th>
                <th>Alamat Peminjam</th>
                <th>No.Hp </th>
                <th>Tgl Pinjam</th>
                <th>Tgl Pengembalian</th>
                <th>Lama Pinjam</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map((book) => (
                <tr key={book.id}>
                  <td className="JdlB">{book.judul_buku}</td>
                  <td className="JdlA">{book.jumlah}</td>
                  <td className="JdlC">{book.nama_peminjam}</td>
                  <td className="JdlC">{book.alamat_peminjam}</td>
                  <td className="Jdl">{book.noHp_peminjam}</td>
                  <td className="Jdl">{book.tanggal_pinjam}</td>
                  <td className="Jdl">{book.tanggal_pengembalian}</td>
                  <td className="Jdl">{book.lama_pinjam}</td>
                  <td>
                  <div className="btn-group">
                      <button
                        onClick={() => this.editBook(book.id)}
                        className="btn btn-info"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => this.PopUpdeleteBook(book.id)}
                        className="btn btn-danger"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                      <button
                        onClick={() => this.viewBook(book.id)}
                        className="btn btn-view"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListInventoryComponent;
