const productos = [
  { 
    id: 1, 
    nombre: "Tarjeta Grafica RTX 3070", 
    precio: 280, 
    categoria: "Hardware", 
    imagen: "img/asus tuf nvidia3070.jpg",
    descripcion: "Tarjeta gráfica de alto rendimiento para gaming y creación.",
    caracteristicas: [
      "Arquitectura NVIDIA Ampere",
      "8GB GDDR6",
      "Ray Tracing en tiempo real",
      "Soporte para DLSS"
    ]
  },
  { 
    id: 2, 
    nombre: "Ipad pro", 
    precio: 499, 
    categoria: "Apple", 
    imagen: "img/ipad pro.jpg",
    descripcion: "Tablet potente con pantalla Retina para profesionales.",
    caracteristicas: [
      "Pantalla Liquid Retina de 11 pulgadas",
      "Chip M1 de Apple",
      "Compatible con Apple Pencil",
      "Hasta 16 GB de RAM"
    ]
  },
  { 
    id: 3, 
    nombre: "Laptop Asus", 
    precio: 2000, 
    categoria: "Laptop", 
    imagen: "img/Laptop Asus.jpg",
    descripcion: "Laptop Asus con alto rendimiento para uso profesional y gaming.",
    caracteristicas: [
      "Procesador Intel Core i7",
      "16GB RAM DDR4",
      "512GB SSD",
      "Tarjeta gráfica NVIDIA GTX 1650"
    ]
  },
  { 
    id: 4, 
    nombre: "Macbook air", 
    precio: 1500, 
    categoria: "Apple", 
    imagen: "img/macbook air.jpg",
    descripcion: "Macbook Air ligero y potente con chip M1.",
    caracteristicas: [
      "Chip Apple M1",
      "8GB RAM",
      "256GB SSD",
      "Pantalla Retina de 13.3 pulgadas"
    ]
  },
  { 
    id: 5, 
    nombre: "Monitor de 27", 
    precio: 100, 
    categoria: "Hardware", 
    imagen: "img/monitor Asus.jpg",
    descripcion: "Monitor Asus de 27 pulgadas para uso multimedia y gaming.",
    caracteristicas: [
      "Resolución Full HD 1920x1080",
      "Tiempo de respuesta 5 ms",
      "Conectividad HDMI y VGA",
      "Frecuencia de actualización 75Hz"
    ]
  },
  { 
    id: 6, 
    nombre: "Pc gaming", 
    precio: 1500, 
    categoria: "Laptop", 
    imagen: "img/pc gamer.png",
    descripcion: "PC gaming de alta gama con componentes de última generación.",
    caracteristicas: [
      "Procesador Intel Core i9",
      "32GB RAM DDR4",
      "NVIDIA RTX 3080",
      "1TB SSD + 2TB HDD"
    ]
  },
  { 
    id: 7, 
    nombre: "Playstation 5", 
    precio: 599, 
    categoria: "Consolas", 
    imagen: "img/playstation 5.jpg",
    descripcion: "Consola de última generación con gráficos realistas.",
    caracteristicas: [
      "CPU AMD Ryzen Zen 2",
      "GPU AMD RDNA 2 personalizada",
      "SSD ultra rápido de 825GB",
      "Soporte 4K y 120 FPS"
    ]
  },
  { 
    id: 8, 
    nombre: "Nintendo switch", 
    precio: 300, 
    categoria: "Consolas", 
    imagen: "img/Nintendo.webp",
    descripcion: "Consola híbrida para jugar en casa o portátil.",
    caracteristicas: [
      "Modo portátil y dock para TV",
      "Pantalla táctil de 6.2 pulgadas",
      "Controles Joy-Con desmontables",
      "Multijugador local y online"
    ]
  },
  { 
    id: 9, 
    nombre: "Memoria Ram", 
    precio: 80, 
    categoria: "Hardware", 
    imagen: "img/memoria ram 64 Gb.jpg",
    descripcion: "Memoria RAM DDR4 para mejorar el rendimiento del equipo.",
    caracteristicas: [
      "64GB DDR4",
      "Velocidad 3200 MHz",
      "Latencia CL16",
      "Compatible con la mayoría de placas base"
    ]
  },
  { 
    id: 10, 
    nombre: "PlayStation 4", 
    precio: 399, 
    categoria: "Consolas", 
    imagen: "img/PlayStation 4.png",
    descripcion: "Consola clásica para juegos exclusivos y online.",
    caracteristicas: [
      "CPU AMD Jaguar 8 núcleos",
      "GPU AMD Radeon personalizada",
      "500GB o 1TB HDD",
      "Compatibilidad con VR"
    ]
  },
  { 
    id: 11, 
    nombre: "Teclado mecánico", 
    precio: 250, 
    categoria: "Hardware", 
    imagen: "img/Teclado.png",
    descripcion: "Teclado mecánico RGB con switches personalizables.",
    caracteristicas: [
      "Retroiluminación RGB",
    ]
  },
  { 
    id: 12, 
    nombre: "Xbox Series X", 
    precio: 700, 
    categoria: "Consolas", 
    imagen: "img/Xbox SeriesX.png",
    descripcion: "Teclado mecánico sRGB con switches personalizables.",
    caracteristicas: [
      "Capacidad 1 TB SSD",
      "Con Wi-Fi Sí",
      "Color: Negro",
      "Cantidad de controles incluidos 1",
      "Tipo de consola De sobremesa",
    ]
  },
  { 
    id: 13, 
    nombre: "iPhone 16 Pro Max", 
    precio: 1299, 
    categoria: "Apple", 
    imagen: "img/16 pro max.png",
    descripcion: "iPhone 16 Pro Max.",
    caracteristicas: [
      "Pantalla 69 LTPO Super Retina XDR OLED 120Hz HDR10",
      "Procesador A18 PRO (6C CPU 6C GPU) ",
      "SIM solo eSIM 5G",
      "Capacidad 128/256/512 GB 1 TB",
    ]
  },
  { 
    id: 14, 
    nombre: "Asus TUF Gaming F15", 
    precio: 800, 
    categoria: "Laptop", 
    imagen: "img/Tuf.png",
    descripcion: "la Asus TUF Dash F15 cumple con estos requerimientos.",
    caracteristicas: [
      "Tarjeta gráfica GPU GeForce RTX 3070",
      "Procesador Intel Core i7-11370H de undécima generación",
      "Memoria RAM de 24GB",
      "almacenamiento de 1TB SSD",
    ]
  },
  { 
    id: 15, 
    nombre: "ROG Flow Z13", 
    precio: 450, 
    categoria: "Laptop", 
    imagen: "img/Z13.jpg",
    descripcion: "ROG Flow Z13 fue presentada en el CES 2022 como la primera tableta gamer más potente del mundo.",
    caracteristicas: [
      "Formato reducido de 13 pulgadas",
      "GPU Nvidia GeForce RTX 3050",
      "Procesador Intel Core i9-12700H de duodécima generación",
      "16GB de memoria RAM",
      "Almacenamiento SSD de 512GB",
    ]
  },
  { 
    id: 16, 
    nombre: "AirPods Max", 
    precio: 549, 
    categoria: "Apple", 
    imagen: "img/Apple AirPods Max.png",
    descripcion: "La experiencia más avanzada en audífonos de diadema.",
    caracteristicas: [
      "Anti ruido. Pro sonido",
      "20 horas de duración de batería",
      "Diseño elegante y cómodo",
      "Conectividad Bluetooth",
      "Compatibles con iOS y Android",
      "Control táctil y digital",

    ]
  },
];

// carrito ahora guardará objetos con id, producto y cantidad
const carrito = [];

function renderProductos() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  // Agrupar por categoría
  const categorias = {};
  productos.forEach(prod => {
    if (!categorias[prod.categoria]) {
      categorias[prod.categoria] = [];
    }
    categorias[prod.categoria].push(prod);
  });

  for (const categoria in categorias) {
    const section = document.createElement("section");
    section.className = "categoria";

    const titulo = document.createElement("h2");
    titulo.textContent = categoria;
    section.appendChild(titulo);

    categorias[categoria].forEach(prod => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
       <button onclick="agregarAlCarrito(${prod.id})">Agregar</button>
       <button onclick="verDetalles(${prod.id})">Ver detalles</button>

      `;
      section.appendChild(div);
    });

    contenedor.appendChild(section);
  }
}

// Agregar producto al carrito, si ya existe suma cantidad
function agregarAlCarrito(id) {
  const index = carrito.findIndex(item => item.id === id);
  if (index !== -1) {
    carrito[index].cantidad++;
  } else {
    const producto = productos.find(p => p.id === id);
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarCarrito();
}

// Quitar producto o reducir cantidad
function eliminarDelCarrito(id) {
  const index = carrito.findIndex(item => item.id === id);
  if (index !== -1) {
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad--;
    } else {
      carrito.splice(index, 1);
    }
  }
  actualizarCarrito();
}

// Actualizar el carrito en el DOM
function actualizarCarrito() {
  const carritoPanel = document.getElementById("carrito-panel");
  carritoPanel.style.display = carrito.length === 0 ? "none" : "block";

  document.getElementById('cart-count').textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const lista = document.getElementById('carrito-lista');
  lista.innerHTML = '';

  carrito.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div style="display: flex; align-items: center; margin-bottom: 10px;">
        <img src="${item.imagen}" alt="${item.nombre}" style="width: 50px; height: auto; margin-right: 10px;">
        <span>${item.nombre} - $${item.precio} x ${item.cantidad} = $${(item.precio * item.cantidad).toFixed(2)}</span>
        <button onclick="eliminarDelCarrito(${item.id})" style="margin-left: auto;">-</button>
        <button onclick="agregarAlCarrito(${item.id})">+</button>
      </div>
    `;
    lista.appendChild(li);
  });

  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  document.getElementById('carrito-total').textContent = total.toFixed(2);
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  document.getElementById("pago-formulario").style.display = "block";
  document.getElementById("carrito-panel").style.display = "none";
}

function procesarPago(event) {
  event.preventDefault();

  // Validaciones extra básicas
  const nombre = document.getElementById("nombre").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const fecha = document.getElementById("fecha").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (nombre.length < 3) {
    alert("Por favor, ingresa un nombre válido.");
    return false;
  }

  if (!/^\d{16}$/.test(numero)) {
    alert("El número de tarjeta debe tener 16 dígitos.");
    return false;
  }

  if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(fecha)) {
    alert("La fecha debe tener formato MM/AA.");
    return false;
  }

  if (!/^\d{3}$/.test(cvv)) {
    alert("El CVV debe tener 3 dígitos.");
    return false;
  }

  alert("✅ Pago realizado con éxito. ¡Gracias por tu compra!");

  carrito.length = 0;
  actualizarCarrito();

  document.getElementById("pago-formulario").style.display = "none";
  return false;
}

function cancelarPago() {
  document.getElementById("pago-formulario").style.display = "none";
  if (carrito.length > 0) {
    document.getElementById("carrito-panel").style.display = "block";
  }
}

function vaciarCarrito() {
  carrito.length = 0;
  actualizarCarrito();
}

// Modo oscuro con persistencia en localStorage
const btnToggle = document.getElementById('btn-toggle-modo');
const body = document.body;

if (localStorage.getItem('modo') === 'oscuro') {
  body.classList.add('modo-oscuro');
  btnToggle.textContent = '🌙';
} else {
  btnToggle.textContent = '☀️';
}

btnToggle.addEventListener('click', () => {
  body.classList.toggle('modo-oscuro');

  if (body.classList.contains('modo-oscuro')) {
    btnToggle.textContent = '🌙';
    localStorage.setItem('modo', 'oscuro');
  } else {
    btnToggle.textContent = '☀️';
    localStorage.setItem('modo', 'claro');
  }
});

const inputTarjeta = document.getElementById('tarjeta');

inputTarjeta.addEventListener('input', e => {
  let valor = e.target.value;

  // Quitar todo lo que no sean números
  valor = valor.replace(/\D/g, '');

  // Limitar a 16 dígitos
  if (valor.length > 16) {
    valor = valor.slice(0, 16);
  }
  // Formatear con espacios cada 4 dígitos
  let valorFormateado = '';
  for (let i = 0; i < valor.length; i++) {
    if (i > 0 && i % 4 === 0) {
      valorFormateado += ' ';
    }
    valorFormateado += valor[i];
  }

  e.target.value = valorFormateado;
});

const inputFecha = document.getElementById('fecha-exp');

inputFecha.addEventListener('input', e => {
  let valor = e.target.value;

  // Quitar todo lo que no sean números
  valor = valor.replace(/\D/g, '');

  // Limitar a 4 dígitos
  if (valor.length > 4) valor = valor.slice(0, 4);

  // Insertar slash después de 2 dígitos
  if (valor.length > 2) {
    valor = valor.slice(0,2) + '/' + valor.slice(2);
  }

  e.target.value = valor;
});

function verDetalles(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  document.getElementById('modal-nombre').textContent = producto.nombre;
  document.getElementById('modal-precio').textContent = `Precio: $${producto.precio}`;
  document.getElementById('modal-imagen').src = producto.imagen;

  // Botón "Agregar al carrito" dentro del modal
  const btnAgregar = document.getElementById('modal-agregar-btn');
  btnAgregar.onclick = () => {
    agregarAlCarrito(producto.id);
    cerrarModal();
  };

  document.getElementById('modal-detalle').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal-detalle').style.display = 'none';
}

function verDetalles(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  document.getElementById('modal-nombre').textContent = producto.nombre;
  document.getElementById('modal-precio').textContent = `Precio: $${producto.precio}`;
  document.getElementById('modal-imagen').src = producto.imagen;
  document.getElementById('modal-imagen').alt = producto.nombre;

  // Mostrar descripción (puede estar vacía)
  document.getElementById('modal-descripcion').textContent = producto.descripcion || '';

  // Mostrar características
  const lista = document.getElementById('modal-caracteristicas');
  lista.innerHTML = '';
  if (producto.caracteristicas && producto.caracteristicas.length > 0) {
    producto.caracteristicas.forEach(carac => {
      const li = document.createElement('li');
      li.textContent = carac;
      lista.appendChild(li);
    });
  }

  const btnAgregar = document.getElementById('modal-agregar-btn');
  btnAgregar.onclick = () => {
    agregarAlCarrito(producto.id);
    cerrarModal();
  };

  document.getElementById('modal-detalle').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal-detalle').style.display = 'none';
}


function mostrarEtiqueta() {
    const etiqueta = document.getElementById('etiqueta-contacto');
    etiqueta.style.display = 'block';

    // Ocultar después de 5 segundos
    setTimeout(() => {
      etiqueta.style.display = 'none';
    }, 5000);
  }

  function toggleEtiquetaServicios(event) {
  event.preventDefault();  // Evitar scroll al #servicios

  const etiqueta = document.getElementById('etiqueta-servicios');
  
  if (etiqueta.style.display === 'block') {
    etiqueta.style.display = 'none';
  } else {
    etiqueta.style.display = 'block';
  }
}

 function mostrarFormularioCita() {
    document.getElementById("formulario-cita").style.display = "block";
  }

  function cancelarCita() {
    document.getElementById("formulario-cita").style.display = "none";
  }

  function enviarCita(event) {
    event.preventDefault();
    alert("Tu cita ha sido registrada. ¡Gracias!");
    cancelarCita();
  }

renderProductos();
actualizarCarrito();