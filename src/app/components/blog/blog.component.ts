import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INews } from '../../interfaces/INews';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  arrayNews: INews[] =[
    {title: "Días sin fin", image: "https://via.placeholder.com/150", text: "Texto noticia", date: "2023-07-01"},
    {title: "Hecatombe", image: "https://via.placeholder.com/150", text: "Texto noticia", date: "2023-07-05"}
  ]
  newNews: INews = {
    title:"",
    image:"",
    text:"",
    date:""
  }

  saveNews() {
    if (this.newNews.title !== "" && this.newNews.image !== "" && this.newNews.text !== "" && this.newNews.date !== "") {
    this.arrayNews.push(this.newNews)
    this.newNews = {title:"", image:"", text:"", date:""}
  } else {
    alert ("Todos los campos son obligatorios")
  }
    //console.log(this.newNews)
    //console.log(this.arrayProducts)
  }

  loadData(): string {
  let html: string = ""
  this.arrayNews.forEach((eachNew:INews) => {
    //Juan Antonio, en el campo "URL de la imagen" en el formulario hay que introducir el protocolo "https://" para que funcione el vínculo una vez pintado en el listado
    html = html + 
    `<div class=news>
    <div><strong>Título: </strong>${eachNew.title}</div>
    <div><strong>Imagen: </strong><a href="${eachNew.image}"target="_blank">${eachNew.image}</a></div>
    <div><strong>Cuerpo: </strong>${eachNew.text}</div>
    <div><strong>Fecha: </strong>${eachNew.date}</div>
    </div>`
    })
    return html
  }
}