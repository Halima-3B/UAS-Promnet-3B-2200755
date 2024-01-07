import React, { Component } from "react";
import InventoryService from "../services/InventoryService";

class CreateInventoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      judul_buku: "",
      jumlah: 1,
      nama_peminjam: "",
      alamat_peminjam: "",
      noHp_peminjam: "",
      tanggal_pinjam: "",
      tanggal_pengembalian: "",
      lama_pinjam: "",
    };

    this.changeJudulBuku = this.changeJudulBuku.bind(this);
    this.changeJumlah = this.changeJumlah.bind(this);
    this.changeNamaPeminjam = this.changeNamaPeminjam.bind(this);
    this.changeAlamatPeminjam = this.changeAlamatPeminjam.bind(this);
    this.changeNoHpPeminjam = this.changeNoHpPeminjam.bind(this);
    this.changeTanggalPinjam = this.changeTanggalPinjam.bind(this);
    this.changeTanggalPengembalian = this.changeTanggalPengembalian.bind(this);
    this.changeLamaPinjam = this.changeLamaPinjam.bind(this);
    this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      InventoryService.getBookById(this.state.id).then((res) => {
        let book = res.data;
        this.setState({
          judul_buku: book.judul_buku,
          jumlah: book.jumlah,
          nama_peminjam: book.nama_peminjam,
          alamat_peminjam: book.alamat_peminjam,
          noHp_peminjam: book.noHp_peminjam,
          tanggal_pinjam: book.tanggal_pinjam,
          tanggal_pengembalian: book.tanggal_pengembalian,
          lama_pinjam: book.lama_pinjam,
        });
      });
    }
  }

  saveOrUpdateBook = (e) => {
    e.preventDefault();
    let book = {
      judul_buku: this.state.judul_buku,
      jumlah: this.state.jumlah,
      nama_peminjam: this.state.nama_peminjam,
      alamat_peminjam: this.state.alamat_peminjam,
      noHp_peminjam: this.state.noHp_peminjam,
      tanggal_pinjam: this.state.tanggal_pinjam,
      tanggal_pengembalian: this.state.tanggal_pengembalian,
      lama_pinjam: this.state.lama_pinjam,
    };

    if (this.state.id === "_add") {
      InventoryService.createBook(book).then((res) => {
        this.props.history.push("/books");
      });
    } else {
      InventoryService.updateBook(book, this.state.id).then((res) => {
        this.props.history.push("/books");
      });
    }
  };

  changeJudulBuku = (event) => {
    this.setState({ judul_buku: event.target.value });
  };

  changeJumlah = (event) => {
    this.setState({ jumlah: (event.target.value) });
  };

  changeNamaPeminjam = (event) => {
    this.setState({ nama_peminjam: event.target.value });
  };

  changeAlamatPeminjam = (event) => {
    this.setState({ alamat_peminjam: event.target.value });
  };

  changeNoHpPeminjam = (event) => {
    this.setState({ noHp_peminjam: event.target.value });
  };

  changeTanggalPinjam = (event) => {
    this.setState({ tanggal_pinjam: event.target.value });
  };

  changeTanggalPengembalian = (event) => {
    this.setState({ tanggal_pengembalian: event.target.value });
  };

  changeLamaPinjam = (event) => {
    this.setState({ lama_pinjam: event.target.value });
  };

  cancel() {
    this.props.history.push("/books");
  }

  getTitle() {
    return this.state.id === "_add" ? (
      <h1 className="ttl">Pinjam Buku</h1>
    ) : (
      <h1 className="ttl">Perbarui Pinjaman Buku</h1>
    );
  }

  render() {
    return (
      <div>
        <div className="bgks">
          <div className="bungkus2">
            <div className="card">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Judul Buku</label>
                    <br></br>
                    <input
                      name="judul_buku"
                      className="form-control"
                      value={this.state.judul_buku}
                      onChange={this.changeJudulBuku}
                    />
                  </div>
                  <div className="form-group">
                      <label>Jumlah</label>
                      <br></br>
                      <input
                        type="number"
                        name="jumlah"
                        className="form-control"
                        value={this.state.jumlah}
                        onChange={this.changeJumlah}
                        min="0"
                      />
                  </div>
                  <div className="form-group">
                    <label>Nama Peminjam</label>
                    <br></br>
                    <input
                      name="nama_peminjam"
                      className="form-control"
                      value={this.state.nama_peminjam}
                      onChange={this.changeNamaPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label>Alamat Peminjam</label>
                    <br></br>
                    <input
                      name="alamat_peminjam"
                      className="form-control"
                      value={this.state.alamat_peminjam}
                      onChange={this.changeAlamatPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label>No HP Peminjam</label>
                    <br></br>
                    <input
                      name="noHp_peminjam"
                      className="form-control"
                      value={this.state.noHp_peminjam}
                      onChange={this.changeNoHpPeminjam}
                    />
                  </div>
                  <div className="form-group">
                    <label>Tanggal Pinjam</label>
                    <br></br>
                    <input
                      type="date"
                      name="tanggal_pinjam"
                      className="form-control"
                      value={this.state.tanggal_pinjam}
                      onChange={this.changeTanggalPinjam}
                    />
                  </div>
                  <div className="form-group">
                    <label>Tanggal Pengembalian</label>
                    <br></br>
                    <input
                      type="date"
                      name="tanggal_pengembalian"
                      className="form-control"
                      value={this.state.tanggal_pengembalian}
                      onChange={this.changeTanggalPengembalian}
                    />
                  </div>
                  <div className="form-group">
                    <label>Lama Pinjam</label>
                    <br></br>
                    <input
                      name="lama_pinjam"
                      className="form-control"
                      value={this.state.lama_pinjam}
                      onChange={this.changeLamaPinjam}
                    />
                  </div>

                  <button
                    className="btn btn-info"
                    onClick={this.saveOrUpdateBook}
                  >
                    Save
                  </button>

                  <button
                    style={{ marginLeft: '14px' }}
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateInventoryComponent;
