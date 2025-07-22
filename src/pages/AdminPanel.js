import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = () => {
  const [newsList, setNewsList] = useState([]);
  const [formData, setFormData] = useState({ title: "", category: "", content: "" });
  const [editId, setEditId] = useState(null);

  // 🔁 Load from API or Dummy (for now dummy)
  useEffect(() => {
    // Later replace this with fetch('/api/news')
    import("../data/dummyNews.js").then((module) => {
      setNewsList(module.default);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      // Later: PUT to /api/news/:id
      const updatedList = newsList.map((item) =>
        item.id === editId ? { ...item, ...formData } : item
      );
      setNewsList(updatedList);
      setEditId(null);
    } else {
      // Later: POST to /api/news
      const newNews = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString()
      };
      setNewsList([...newsList, newNews]);
    }

    setFormData({ title: "", category: "", content: "" });
  };

  const handleEdit = (item) => {
    setFormData({ title: item.title, category: item.category, content: item.content });
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    // Later: DELETE /api/news/:id
    const updatedList = newsList.filter((item) => item.id !== id);
    setNewsList(updatedList);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Admin Panel - Manage News</h2>

      <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
        <div className="row g-2">
          <div className="col-md-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Title"
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-control"
              placeholder="Category"
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="form-control"
              placeholder="Content"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {editId ? "Update News" : "Add News"}
        </button>
      </form>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Content</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.content}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
