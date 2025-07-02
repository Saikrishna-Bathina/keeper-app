# 📝 Notes App

A clean and responsive **Notes Application** built using **React** and **Bootstrap**, allowing users to add and delete notes easily with real-time updates and a card-based UI.

---

## 🚀 Features

- ➕ Add new notes with a title and content
- 🗑️ Delete notes instantly
- 🧱 Responsive layout using Bootstrap grid
- 💳 Notes displayed as Bootstrap cards
- ⚡ Real-time state updates with React

---

## 🛠️ Tech Stack

| Tech             | Role                                    |
|------------------|-----------------------------------------|
| React            | Frontend UI & Component Management      |
| Bootstrap 5      | Styling and Responsive Grid Layout      |
| JSX              | Declarative UI Syntax                   |
| JavaScript (ES6) | Application Logic and State Handling    |

---

## ❗ Problems Faced & Their Resolutions

### 1. ❌ **Delete Button Not Working**
- **Problem:** Clicking "Delete" did not remove the note.
- **Cause:** `onDelete` was not passed to the `Note` component or `props.id` was `undefined`.
- **Solution:**
  ```jsx
  <Note id={note.key} onDelete={deleteNote} />