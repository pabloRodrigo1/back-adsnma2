# Comandos basicos do GIT

1.Clonar um repositorio

```shell
git clone url_do_repositorio
```

2. Configurar nome e email

```shell
git --local user.name "fulano"
git --local user.email "email_do_fulano"
```

3. Verificar o status do git

```shell
git status
```

4. Adicionar ao versionamento

```shell
git add nome_do_arquivo
```

5. Fazer commit das alterações

```shell
git commit -m "Comentario"
```

6. Atualizar com as alterações do GitHub

```shell
git pull origin nome_da_branch
```
7. Enviar alterações para o GitHub

```shell
git push origin nome_da_branch
```