import axios from 'axios';

const baseURL = 'https://movie0706.cybersoft.edu.vn/api/';

export enum EApiCategory {
    QLDV = 'QuanLyDatVe',
    QLND = 'QuanLyNguoiDung',
    QLP = 'QuanLyPhim',
    QLR = 'QuanLyRap',
}

export const apiURL = axios.create({
    baseURL,
});
