@component('mail::message')
# Новий контакт зареєструвався

## Дані контакта

@component('mail::table')
|             |                       |
| ----------- |:--------------------- |
| **Імя**     | {{$contact['name']}}  |
| **Телефон** | {{$contact['phone']}} |
| **Email**   | {{$contact['email']}} |
@endcomponent

@endcomponent
