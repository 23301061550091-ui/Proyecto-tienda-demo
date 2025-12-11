// ------------------ PRODUCTOS ------------------
const productos = [
  { id: 1, nombre: "Playera Negra", precio: 250, categoria: "ropa", img: "https://m.media-amazon.com/images/I/21PlG-qBIuL._AC_SX466_.jpg" },
  { id: 2, nombre: "Sudadera Azul", precio: 500, categoria: "ropa", img: "https://m.media-amazon.com/images/I/51DRcSFSnaL._AC_SX522_.jpg" },
  { id: 3, nombre: "Jeans", precio: 600, categoria: "ropa", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqs48SJtzlgo99JGFuU17L3TS3G7H8cuO200Ro1ZnugayW_PWyeaus_pg4NVM5Ziwxbc26YIGdRS_T77GZcc04T4HkLRU8oMXMfa-ZV5hvQSfcICFy5_n8" },
  { id: 4, nombre: "Chaqueta", precio: 850, categoria: "ropa", img: "https://m.media-amazon.com/images/I/51V8LJ7zHVL._AC_SX679_.jpg" },
  { id: 5, nombre: "Camisa", precio: 300, categoria: "ropa", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVtFJGw7KgJHnvChwjPSz0oFuKTKl2Dnh_rmJUMUVkml_UFJZo9VWQ4lY0lb35MC2pqpjB0yeQFwQCB9Pr_sDgbM8HOXl4NGmhcwzBu4OZdivVDsL7LZyzjp4" },
  { id: 6, nombre: "Playera Blanca", precio: 220, categoria: "ropa", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcToJIBDs_vpTqZ-XAIBsiMFmFrDIaZcDphFIkmrtHQ2RFd9J4q3d52p7ZQqVM7_w34Q713qlbWD88pIrO9IQ5dElnHgsLqdlWVR1-zMroXWzAitG7oCsC-VRjm03VDhKe25GSV-fPA&usqp=CAc" },
  { id: 7, nombre: "Pants", precio: 400, categoria: "ropa", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnpuiu2rLfQlvzH49oOpPiT8Xe4OnwCVCaoOq-8uYvb3cd0Tb6R5djc47_PjbgkfmUfj_AtcEFriCLlgmaUsAPrnBjWzA4vlivSDBQdi_iCoLpaMbjX7x57Q" },
  { id: 8, nombre: "Vestido", precio: 700, categoria: "ropa", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfz9qJKZRAB-1K5QjNmW51rtMkB0Tmr0PvpHtIOI_Kq1QQMMIZa5Wou0U7nPaYFcTNS_5r0g7ew6SyoCu7iXTQ-IA08vf2efgGpvvbLIq2UDMtI78KSlkPag" },
  { id: 9, nombre: "Falda", precio: 350, categoria: "ropa", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLNR8Ms4nJHv8x-StDNPqUsPsa_2EFKG3kspuTUixEP-u7sNHCtdFIOIWuacfIFenc6Da8pOFF8PX224BsqhGWMiINdTrjuaFE0WI8U9tr2nXnN-h-ut86ZaU" },
  { id: 10, nombre: "Gorra", precio: 200, categoria: "ropa", img: "https://m.media-amazon.com/images/I/51DZ5PAO7pL._AC_SX679_.jpg" },

  { id: 11, nombre: "Laptop HP", precio: 14000, categoria: "electronica", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT0SwGLunT8Is2HeUNqViGCCynFHk2i2EHBcYjT9CxZyiwzSyaawKITlXz8ib_GS2y1lnwQOOoRnMQryn4ltxfWyukpsP7dlDM1GujVOEOCJDzBk8iPlviAQJQwgnNtHesAPSnSAkjMxw&usqp=CAc" },
  { id: 12, nombre: "Audífonos", precio: 800, categoria: "electronica", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTy-OB1pm6FmTlgGJxMUaGswDHo8nIjrXi3pB-9h1EfxBQlW1QPzg45LoqlJZ7kxNE3NINCGTF4BdX9wuG54Ucpwmch4Z21kd4Rkd9HW3efW69g_o0GijpO4A" },

  { id: 21, nombre: "Cómo hacer que te pasen cosas buenas", precio: 350, categoria: "libros", img: "https://m.media-amazon.com/images/I/61gRykScXTL._SY342_.jpg" },
  { id: 22, nombre: "La niebla", precio: 300, categoria: "libros", img: "https://m.media-amazon.com/images/I/61r86LAQ07L._SY342_.jpg" },
    { id: 1, nombre: "Playera Negra", precio: 250, categoria: "ropa", img: "https://m.media-amazon.com/images/I/21PlG-qBIuL._AC_SX466_.jpg" },
    { id: 2, nombre: "Sudadera Azul", precio: 500, categoria: "ropa", img: "https://m.media-amazon.com/images/I/51DRcSFSnaL._AC_SX522_.jpg" },
    { id: 3, nombre: "Jeans", precio: 600, categoria: "ropa", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqs48SJtzlgo99JGFuU17L3TS3G7H8cuO200Ro1ZnugayW_PWyeaus_pg4NVM5Ziwxbc26YIGdRS_T77GZcc04T4HkLRU8oMXMfa-ZV5hvQSfcICFy5_n8" },
    { id: 4, nombre: "Chaqueta", precio: 850, categoria: "ropa", img: "https://m.media-amazon.com/images/I/51V8LJ7zHVL._AC_SX679_.jpg" },
    { id: 5, nombre: "Camisa", precio: 300, categoria: "ropa", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVtFJGw7KgJHnvChwjPSz0oFuKTKl2Dnh_rmJUMUVkml_UFJZo9VWQ4lY0lb35MC2pqpjB0yeQFwQCB9Pr_sDgbM8HOXl4NGmhcwzBu4OZdivVDsL7LZyzjp4" },
    { id: 6, nombre: "Playera Blanca", precio: 220, categoria: "ropa", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcToJIBDs_vpTqZ-XAIBsiMFmFrDIaZcDphFIkmrtHQ2RFd9J4q3d52p7ZQqVM7_w34Q713qlbWD88pIrO9IQ5dElnHgsLqdlWVR1-zMroXWzAitG7oCsC-VRjm03VDhKe25GSV-fPA&usqp=CAc" },
    { id: 7, nombre: "Pants", precio: 400, categoria: "ropa", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnpuiu2rLfQlvzH49oOpPiT8Xe4OnwCVCaoOq-8uYvb3cd0Tb6R5djc47_PjbgkfmUfj_AtcEFriCLlgmaUsAPrnBjWzA4vlivSDBQdi_iCoLpaMbjX7x57Q" },
    { id: 8, nombre: "Vestido", precio: 700, categoria: "ropa", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfz9qJKZRAB-1K5QjNmW51rtMkB0Tmr0PvpHtIOI_Kq1QQMMIZa5Wou0U7nPaYFcTNS_5r0g7ew6SyoCu7iXTQ-IA08vf2efgGpvvbLIq2UDMtI78KSlkPag" },
    { id: 9, nombre: "Falda", precio: 350, categoria: "ropa", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQLNR8Ms4nJHv8x-StDNPqUsPsa_2EFKG3kspuTUixEP-u7sNHCtdFIOIWuacfIFenc6Da8pOFF8PX224BsqhGWMiINdTrjuaFE0WI8U9tr2nXnN-h-ut86ZaU" },
    { id: 10, nombre: "Gorra", precio: 200, categoria: "ropa", img: "https://m.media-amazon.com/images/I/51DZ5PAO7pL._AC_SX679_.jpg" },
  
    { id: 11, nombre: "Laptop HP", precio: 14000, categoria: "electronica", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT0SwGLunT8Is2HeUNqViGCCynFHk2i2EHBcYjT9CxZyiwzSyaawKITlXz8ib_GS2y1lnwQOOoRnMQryn4ltxfWyukpsP7dlDM1GujVOEOCJDzBk8iPlviAQJQwgnNtHesAPSnSAkjMxw&usqp=CAc" },
    { id: 12, nombre: "Audífonos", precio: 800, categoria: "electronica", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTy-OB1pm6FmTlgGJxMUaGswDHo8nIjrXi3pB-9h1EfxBQlW1QPzg45LoqlJZ7kxNE3NINCGTF4BdX9wuG54Ucpwmch4Z21kd4Rkd9HW3efW69g_o0GijpO4A" },
    { id: 13, nombre: "Mouse", precio: 400, categoria: "electronica", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJFxF1qQ-p2BgMnRKgyiuMuEBeyANCCyp9cWq7y7TExGaxID_qLkhrYfe1rYwnMayx3FVJlxzU1cd4OZke3wJogZXgY2mwwMi7WoIQQ44CncLuq7-5vowImUQc7qgNr-yTTOOkBmIzRqY&usqp=CAc" },
    { id: 14, nombre: "Teclado", precio: 700, categoria: "electronica", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcoAdCZIt8X070cGduS95waZLuxXGfh3BpZFCCGbxDm2-impxMgBAXynWWvmmfP-ZcDv0TKRlHNwx5mArKPMpHkp_mN6XhY3PE1HsNTUqbytpzQP-ksbS0kg" },
    { id: 15, nombre: "Monitor", precio: 3500, categoria: "electronica", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTvXdzs35BpBxShFc1VcDQDbGib3n2cr8VoBoJ0Q4gHzHAbZeFxcFZHSwyXmAx89Tp41IO7sHmAZYz-AYsVktNN8xkaWviDdtuVLw6eTAn_cOjbLHSRueQ0" },
    { id: 16, nombre: "Tablet", precio: 5000, categoria: "electronica", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSxXdhnNPbVhfF6pEqWPeDrrXP1zX0UfsN3AzSAQZAw4F8pTcz3F7tgj5IUd4CdQD7qjpujawLqLE0tfymMyxx2PV-w35b6nSSlnT9Iu8CvplMkLnerq6qq-g" },
    { id: 17, nombre: "Celular", precio: 9000, categoria: "electronica", img: "https://m.media-amazon.com/images/I/61+K3MDUXkL._AC_SY450_.jpg" },
    { id: 18, nombre: "Smartwatch", precio: 2000, categoria: "electronica", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQYwBcNWPxuyfyVSj6yO7WE5zZJ2XTAb3MByilXytkJ_5cU-mf_Twi9IlYLJ6yP7Rbp45vcDqtt5T0h6k0JxtYacBLHTGuJTm_vnqofSpRDQ-g1Ainhrue7Q6HOGtc7O2aHXHQ0r8SYAQ&usqp=CAc" },
    { id: 19, nombre: "Bocina", precio: 1200, categoria: "electronica", img: "https://m.media-amazon.com/images/I/71ps4UPSL0L._AC_SY300_SX300_QL70_ML2_.jpg" },
    { id: 20, nombre: "Cámara", precio: 6000, categoria: "electronica", img: "https://m.media-amazon.com/images/I/71ANGtyZRzL._AC_SX450_.jpg" },
 
    { id: 21, nombre: "Cómo hacer que te pasen cosas buenas", precio: 350, categoria: "libros", img: "https://m.media-amazon.com/images/I/61gRykScXTL._SY342_.jpg" },
    { id: 22, nombre: "La niebla ", precio: 300, categoria: "libros", img: "https://m.media-amazon.com/images/I/61r86LAQ07L._SY342_.jpg" },
    { id: 23, nombre: "Hay Un Fantasma En Esta Casa", precio: 400, categoria: "libros", img: "https://m.media-amazon.com/images/I/81Pnqr7EdpL._SY425_.jpg" },
    { id: 24, nombre: "El Visitante", precio: 500, categoria: "libros", img: "https://m.media-amazon.com/images/I/A1S3qV8nA9L._SY425_.jpg" },
    { id: 25, nombre: "Los lentes de la felicidad", precio: 600, categoria: "libros", img: "https://m.media-amazon.com/images/I/71J-5FuAYDL._SY425_.jpg" },
    { id: 26, nombre: "El libro práctico de bases de datos", precio: 450, categoria: "libros", img: "https://m.media-amazon.com/images/I/61G9xYdfXKL._SY385_.jpg" },
    { id: 27, nombre: "Un elefante en la habitación", precio: 400, categoria: "libros", img: "https://m.media-amazon.com/images/I/71YdLup7+qL._SY385_.jpg" },
    { id: 28, nombre: "El lenguaje de programación Python de principio a fin (Spanish Edition) ", precio: 550, categoria: "libros", img: "https://m.media-amazon.com/images/I/71ZnYM6dHHL._SY385_.jpg" },
    { id: 29, nombre: "Emociones para la vida", precio: 250, categoria: "libros", img: "https://m.media-amazon.com/images/I/81uZhq9kO8L._SY425_.jpg" },
    { id: 30, nombre: "Crisis, ¿Estás Preparado Para Crecer?", precio: 650, categoria: "libros", img: "https://m.media-amazon.com/images/I/81dJvgtZdqL._SY385_.jpg" }
  ];

// ------------------ CARRITO ------------------
let carrito = [];
let categoriaActual = "todo";

// ------------------ MOSTRAR + BUSCAR ------------------
function mostrarProductos(filtro = "todo") {
  categoriaActual = filtro;
  buscarProductos();
}

function buscarProductos() {
  const texto = document.getElementById("buscar").value.toLowerCase();
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  productos
    .filter(p =>
      (categoriaActual === "todo" || p.categoria === categoriaActual) &&
      p.nombre.toLowerCase().includes(texto)
    )
    .forEach(prod => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${prod.img}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <button onclick="agregarCarrito(${prod.id})">Agregar</button>
      `;
      contenedor.appendChild(card);
    });
}

// ------------------ CARRITO FUNCIONES ------------------
function agregarCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalTxt = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((prod, index) => {
    total += prod.precio;
    const li = document.createElement("li");
    li.innerHTML = `
      ${prod.nombre} - $${prod.precio}
      <button onclick="eliminar(${index})">❌</button>
    `;
    lista.appendChild(li);
  });

  totalTxt.textContent = `Total: $${total}`;
}

function eliminar(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
}

function comprar() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío 🛒");
    return;
  }

  const total = carrito.reduce((acc, p) => acc + p.precio, 0);

  alert(`✅ Compra realizada\nTotal: $${total}\n¡Gracias por tu compra!`);
  carrito = [];
  mostrarCarrito();
}

// ------------------ INICIAL ------------------
mostrarProductos();
