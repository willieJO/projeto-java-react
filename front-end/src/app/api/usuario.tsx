

export async function EnviarDados(dados: any) {
    try {
      const response = await fetch('http://localhost:8080/api/Registro/SalvarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  }