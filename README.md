## Como rodar o projeto

### 1. Iniciar o backend

Abra um terminal na pasta do backend:

```powershell
cd "C:\Users\masun\Desktop\casino completo\jogoseducativos-back\jogoseducativos"
.\mvnw.cmd spring-boot:run
````
---

### 2. Iniciar o frontend

Abra outro terminal na pasta do frontend:

```powershell
cd "C:\Users\masun\Desktop\casino completo\jogoseducativos-front\jogos-educativos-aula-main\my-app"
npm run dev
```

Se ele der erro ao executar e tiver configurado o path no windows, rode isso:

```powershell
$env:Path = "C:\Program Files\nodejs;$env:Path"
>> node -v
>> npm -v
>> npm run dev
```

Depois é só abrir no navegador:

```text
http://localhost:5173
```

Se o `npm run dev` não funcionar por causa do PATH, usa:

```powershell
& "C:\Program Files\nodejs\npm.cmd" run dev
````