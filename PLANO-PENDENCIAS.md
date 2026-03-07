# Plano de Pendências — Site Pessoal marcelomiklos.github.io

## Status atual: SITE NO AR
**URL:** https://marcelomiklos.github.io/

---

## Pendência 1 — Foto de perfil

### O que fazer
Substituir o arquivo placeholder por uma foto real.

### Como executar
1. Ter uma foto sua em formato JPG ou PNG (recomendado: quadrada, mínimo 300x300px)
2. Avisar o Claude com o caminho da foto no Mac
3. O Claude substitui `assets/img/profile.jpg`, faz commit e push

---

## Pendência 2 — Currículo / Sobre mim

### Dados a fornecer ao Claude

#### Experiência profissional (do mais recente ao mais antigo)
Para cada cargo:
- [ ] Título do cargo
- [ ] Nome da empresa
- [ ] Período (ex: 2022 — Presente)
- [ ] Descrição das atividades (2-3 frases)

#### Formação acadêmica
Para cada curso:
- [ ] Nome do curso / graduação
- [ ] Instituição
- [ ] Período

#### Habilidades técnicas
- [ ] Lista de tecnologias, ferramentas e linguagens que domina

#### Certificações (opcional)
- [ ] Nome da certificação e emissor

#### CV em PDF (opcional)
- [ ] Arquivo PDF do currículo para download

### Arquivos que serão atualizados
| Arquivo | O que trocar |
|---------|-------------|
| `pt/sobre.html` | Experiência, formação, habilidades, certificações (PT-BR) |
| `en/about.html` | Mesmos dados traduzidos para inglês |

### Como executar
1. Fornecer os dados acima ao Claude
2. O Claude atualiza os 2 arquivos, faz commit e push

---

## Pendência 3 — Projetos reais

### Dados a fornecer ao Claude

Para cada projeto:
- [ ] Nome do projeto
- [ ] Descrição (2-3 frases)
- [ ] Tecnologias usadas (tags)
- [ ] Link do código (GitHub, se tiver)
- [ ] Link da demo (se tiver)

### Arquivos que serão atualizados
| Arquivo | O que trocar |
|---------|-------------|
| `pt/projetos.html` | Cards de projetos com dados reais (PT-BR) |
| `en/projects.html` | Mesmos dados traduzidos para inglês |

### Como executar
1. Fornecer os dados acima ao Claude
2. O Claude substitui os projetos de exemplo pelos reais, faz commit e push

---

## Pendência 4 — Redes sociais adicionais (opcional)

### Dados a fornecer ao Claude
- [ ] Instagram (username, se quiser adicionar)
- [ ] Twitter/X (username, se quiser adicionar)

### Arquivo que será atualizado
| Arquivo | O que trocar |
|---------|-------------|
| `_config.yml` | Campos `instagram` e `twitter` na seção `social` |

### Como executar
1. Informar os usernames ao Claude
2. O Claude atualiza o `_config.yml`, faz commit e push
3. Os ícones aparecem automaticamente no footer e páginas de contato

---

## Pendência 5 — Loja (itens reais)

### Para cada item à venda, fornecer ao Claude:
- [ ] Nome do item
- [ ] Preço (R$)
- [ ] Descrição detalhada
- [ ] Foto(s) do produto (caminho no Mac)
- [ ] Status: disponível ou vendido
- [ ] Categoria (calçados, eletrônicos, roupas, etc.)

### Como executar
1. Fornecer dados + foto ao Claude
2. O Claude cria um arquivo em `_loja/`, copia a foto para `assets/img/loja/`, faz commit e push
3. O item aparece automaticamente na loja e na home

### Para marcar item como vendido
1. Avisar o Claude qual item foi vendido
2. O Claude troca `status: disponivel` para `status: vendido`, faz commit e push
3. O badge muda de verde "Disponível" para vermelho "Vendido"

---

## Resumo rápido

| # | Pendência | Depende de | Tempo do Claude |
|---|-----------|-----------|-----------------|
| 1 | Foto de perfil | Foto JPG/PNG | 1 minuto |
| 2 | Currículo | Dados profissionais | 5 minutos |
| 3 | Projetos reais | Descrição dos projetos | 5 minutos |
| 4 | Redes sociais | Usernames | 1 minuto |
| 5 | Itens na loja | Dados + fotos | 2 min por item |

**Basta fornecer os dados e o Claude faz todo o resto automaticamente.**
