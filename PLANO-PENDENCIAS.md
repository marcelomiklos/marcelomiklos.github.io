# Plano de Pendências — Site Pessoal marcelomiklos.github.io

## Status atual: SITE NO AR
**URL:** https://marcelomiklos.github.io/

---

## Já concluído

- [x] Estrutura Jekyll completa (layouts, includes, CSS, JS)
- [x] Dark mode responsivo
- [x] Bilíngue PT-BR / EN com switcher
- [x] Seções: Home, Sobre, Projetos, Blog, Loja, Contato
- [x] Ícones sociais (GitHub, LinkedIn, WhatsApp, Email, Instagram, Twitter/X)
- [x] Integração Calendly na página de contato
- [x] Loja com 17 pares de tênis catalogados a partir de fotos
- [x] Galeria de fotos com navegação e thumbnails por item
- [x] Filtros na loja por categoria e condição
- [x] Encoding UTF-8 corrigido (sem entidades HTML quebradas)
- [x] Deploy no GitHub Pages funcionando
- [x] Auditoria e correção completa de fotos trocadas em 6 itens da loja
- [x] Layout carousel limpo (setas + dots, sem thumbnails)

### Correção de fotos — Detalhes (concluída em 08/03/2026)

Foram encontradas fotos trocadas entre itens. Todas foram corrigidas usando os 74 arquivos UUID fonte em `_loja/tenis-catalogar/`.

| Item | Fotos corrigidas | Status |
|------|-----------------|--------|
| jordan-1-low-iced-lilac | Restauradas: 02-etiqueta, 03-sola, 04-caixa-etiqueta | OK - 5 fotos |
| nike-dunk-black-sail | Restaurada: 01-capa (única foto disponível nos fontes) | OK - 1 foto |
| jordan-1-low-sky-purple | Restaurada: 06-caixa-etiqueta | OK - 6 fotos |
| jordan-13-retro-bred | Restaurada: 04-etiqueta | OK - 6 fotos |
| nike-air-force-1-black | Restaurada: 03-lateral2 | OK - 8 fotos |
| nike-renew-elevate-3 | Restaurada: 02-lateral | OK - 6 fotos |

**Nota:** O Nike Dunk Black Sail tem apenas 1 foto nos arquivos fonte. Se tiver fotos adicionais desse tênis, forneça ao Claude para adicionar.

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

---

## Pendência 4 — Redes sociais adicionais (opcional)

### Dados a fornecer ao Claude
- [ ] Instagram (username)
- [ ] Twitter/X (username)

### Arquivo que será atualizado
| Arquivo | O que trocar |
|---------|-------------|
| `_config.yml` | Campos `instagram` e `twitter` na seção `social` |

---

## Pendência 5 — Loja: novos itens

### Para cada novo item à venda, fornecer ao Claude:
- [ ] Nome do item
- [ ] Preço (R$)
- [ ] Descrição detalhada
- [ ] Foto(s) do produto (caminho no Mac)
- [ ] Status: disponível ou vendido
- [ ] Categoria: `calcados`, `moda`, `eletronicos`, `acessorios` ou `outros`
- [ ] Condição: `novo`, `seminovo` ou `usado`

### Como adicionar
1. Fornecer dados + foto ao Claude
2. O Claude cria arquivo em `_loja/`, copia fotos para `assets/img/loja/<nome>/`
3. Commit e push — item aparece automaticamente na loja

### Como marcar como vendido
1. Avisar o Claude qual item foi vendido
2. O Claude troca `status: disponivel` para `status: vendido`
3. Badge muda de verde "Disponível" para vermelho "Vendido"

### Categorias disponíveis
| Valor no front matter | Exibição PT | Exibição EN |
|----------------------|-------------|-------------|
| `calcados` | Calçados | Footwear |
| `moda` | Moda | Fashion |
| `eletronicos` | Eletrônicos | Electronics |
| `acessorios` | Acessórios | Accessories |
| `outros` | Outros | Other |

### Condições disponíveis
| Valor no front matter | Exibição PT | Exibição EN |
|----------------------|-------------|-------------|
| `novo` | Novo | New |
| `seminovo` | Seminovo | Like New |
| `usado` | Usado | Used |

---

## Pendência 6 — Domínio customizado (futuro)

### Opção recomendada
Registrar `marcelomiklos.com.br` (~R$40/ano) em registro.br

### Como configurar
1. Registrar domínio em registro.br
2. Apontar DNS para GitHub Pages:
   - Tipo A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Tipo CNAME (www): `marcelomiklos.github.io`
3. Criar arquivo `CNAME` na raiz do repo com o domínio
4. Ativar HTTPS no GitHub Pages (Settings > Pages > Enforce HTTPS)

---

## Resumo rápido

| # | Pendência | Depende de | Prioridade |
|---|-----------|-----------|------------|
| 1 | Foto de perfil | Foto JPG/PNG | Alta |
| 2 | Currículo / Sobre mim | Dados profissionais | Alta |
| 3 | Projetos reais | Descrição dos projetos | Média |
| 4 | Redes sociais | Usernames | Baixa |
| 5 | Novos itens na loja | Dados + fotos | Conforme necessidade |
| 6 | Domínio customizado | Registro + ~R$40/ano | Baixa |

**Basta fornecer os dados e o Claude faz todo o resto automaticamente.**
