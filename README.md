# AuthCore

AuthCore, kimlik doğrulama (Authentication), yetkilendirme (Authorization) ve rol tabanlı erişim kontrolü (RBAC) üzerine geliştirilmiş olan bir backend REST API projesidir.

Proje, modern authentication ve authorization sistemlerinin nasıl çalıştığını uygulamalı olarak öğrenmek ve backend geliştirme becerilerini geliştirmek amacıyla oluşturulmaktadır.

## Özellikler

* Kullanıcı kayıt ve giriş sistemi
* Güvenli parola hashleme
* JWT tabanlı kimlik doğrulama
* Korumalı API endpoint'leri
* Rol Tabanlı Erişim Kontrolü (RBAC)
* Birden fazla kullanıcı rolü
* Kullanıcı ve görev yönetimi
* PostgreSQL veritabanı
* RESTful API mimarisi
* API doğrulama ve hata yönetimi

## Kullanıcı Rolleri

AuthCore farklı yetki seviyelerine sahip kullanıcı rollerini destekleyecektir:

* **USER** — Kendi kaynaklarına erişim ve yönetim
* **MODERATOR** — Ek yönetim yetkileri
* **ADMIN** — Yönetimsel işlemler için tam yetki

## Teknolojiler

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **JWT**
* **bcrypt**
* **Prisma**

## Projenin Amaçları

AuthCore geliştirilirken aşağıdaki backend konularında pratik deneyim kazanılması hedeflenmektedir:

* REST API tasarımı
* Authentication ve Authorization arasındaki fark
* JWT tabanlı kimlik doğrulama
* Parola güvenliği
* Middleware mimarisi
* Role-Based Access Control (RBAC)
* İlişkisel veritabanı tasarımı
* PostgreSQL ilişkileri
* API hata yönetimi
* Backend proje yapısı
* Güvenli API geliştirme

## Proje Yapısı

Proje, backend kodunun farklı sorumluluklara ayrıldığı bir mimari kullanacak şekilde geliştirilecektir.

Temel katmanlar:

* Routes
* Controllers
* Services
* Middleware
* Database
* Authentication
* Authorization

## Proje Durumu

🚧 **Geliştirme Aşamasında**

AuthCore aktif olarak geliştirilen bir backend öğrenme projesidir. Proje ilerledikçe yeni özellikler, testler ve geliştirmeler eklenecektir.

# AuthCore

AuthCore is a backend REST API project built around authentication, authorization, and role-based access control (RBAC).

The project is being developed as a practical backend learning project to understand how modern authentication and authorization systems work from the ground up.

## Features

* User registration and login
* Secure password hashing
* JWT-based authentication
* Protected API routes
* Role-Based Access Control (RBAC)
* Multiple user roles
* User and task management
* PostgreSQL database
* RESTful API architecture
* API validation and error handling

## User Roles

AuthCore will support different levels of access:

* **USER** — Access to personal resources
* **MODERATOR** — Additional management permissions
* **ADMIN** — Full administrative access

## Tech Stack

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **JWT**
* **bcrypt**
* **Prisma**

## Project Goals

The main goal of AuthCore is to gain hands-on experience with:

* REST API design
* Authentication vs. authorization
* JWT token-based authentication
* Password security
* Middleware architecture
* Role-Based Access Control
* Relational database design
* PostgreSQL relationships
* API error handling
* Backend project structure

## Project Structure

The project will be organized around a clean backend architecture with separate layers for:

* Routes
* Controllers
* Services
* Middleware
* Database
* Authentication and authorization logic

## Status

🚧 **In Development**

AuthCore is actively being developed as a learning project. New features and improvements will be added as the project progresses.
