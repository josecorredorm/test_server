const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("Obteniendo un cafe de la ruta get /cafes", async () => {
        const cafes = await request(server).get('/cafes').send();
        expect(cafes.status).toBe(200);
        expect(cafes.body).toBeInstanceOf(Object);
        });
    it("Intento de eliminar un café con un ID que no existe", async () => {
        const jwt = "token";
        const idfind = Math.floor(Math.random() * 999);
        const respuesta = await request(server)
        .delete(`/cafes/${idfind}`)
        .set("Authorization", jwt)
        .send();
        expect(respuesta.status).toBe(404);
    });
    it("Intento agregar un cafe de manera exitosa", async()=>{
        const id = Math.floor(Math.random() * 999);
        const cafe = {id: id, nombre: "late con vainilla"};
        const respuesta = await request(server)
        .post('/cafes')
        .send(cafe);
    });
    it("Intento agregar un cafe de manera exitosa", async()=>{
        const id = Math.floor(Math.random() * 999);
        const iddif=id+1;
        const cafe = {id: id, nombre: "expresso con vainilla"};
        const respuesta = await request(server)
        .post(`/cafes/${iddif}`)
        .send(cafe);
    })
});
