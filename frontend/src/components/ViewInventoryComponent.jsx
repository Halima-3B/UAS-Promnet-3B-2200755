import React, { Component } from "react";
import InventoryService from "../services/InventoryService";

class ViewInventoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      book: {},
    };
  }

  componentDidMount() {
    InventoryService.getBookById(this.state.id).then((res) => {
      this.setState({ book: res.data });
    });
  }

  render() {
    return (
      <div className="bungkusUtama">
        <div className="box">
          <h1 className="ttl">Detail Peminjam Buku</h1>
          <div className="card-body">
            <div className="rowA">
              <label> Judul Buku: </label>
              <div> {this.state.book.judul_buku}</div>
            </div>

            <div className="rowA">
              <label> Jumlah: </label>
              <div> {this.state.book.jumlah}</div>
            </div>

            <div className="rowA">
              <label> Nama Peminjam: </label>
              <div> {this.state.book.nama_peminjam}</div>
            </div>

            <div className="rowA">
              <label> Alamat Peminjam: </label>
              <div> {this.state.book.alamat_peminjam}</div>
            </div>

            <div className="rowA">
              <label> No. Handphone Peminjam: </label>
              <div> {this.state.book.noHp_peminjam}</div>
            </div>

            <div className="rowA">
              <label> Tanggal Pinjam: </label>
              <div> {this.state.book.tanggal_pinjam}</div>
            </div>

            <div className="rowA">
              <label> Tanggal Pengembalian: </label>
              <div> {this.state.book.tanggal_pengembalian}</div>
            </div>

            <div className="rowA">
              <label> Lama Pinjam: </label>
            <div> {this.state.book.lama_pinjam}</div>
          </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ViewInventoryComponent;
