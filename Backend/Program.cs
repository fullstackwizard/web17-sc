var builder = WebApplication.CreateBuilder(args);

// Adicionando serviços ao container
builder.Services.AddControllers(); // Registro correto dos Controllers
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

// Criando a aplicação
var app = builder.Build();

// Configuração do middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");
// app.UseHttpsRedirection(); // Descomente se quiser forçar HTTPS

app.UseAuthorization();
app.MapControllers(); // Mapeia automaticamente os Controllers

// Endpoints diretos

app.MapGet("/", () => "Backend da Web17App Criada");
app.MapGet("/dashboard", () => "Painel Web17App Criada");

app.Run();

