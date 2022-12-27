import { goods } from './data/goods';
import './style.css';

const item = goods[0]
const img = document.createElement('img')
img.setAttribute('src', item.img[0])
const item1 = goods[1]
const img1 = document.createElement('img')
img1.setAttribute('src', item1.img[0])
document.body.appendChild(img)
document.body.appendChild(img1)
