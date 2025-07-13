import { useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";

const typeOfCategories = [
  "Politics",
  "Business",
  "Technology",
  "Sports",
  "Entertainment",
  "Health",
  "Other",
];

const url = "http://localhost:5050/api/news";

const UploadArticle = () => {

  /* ─────────────── state ─────────────── */
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    category: "",
    tags: "",
    author: "",
    source: "",
    coverImage: null,
  });

  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const [author, setAuthor] = useState([]);
  const [disabled, setDisabled] = useState(true);

  /* ─────────────── handlers ─────────────── */
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  /* utilities for add / remove chips */
  const addChip = (value, list, setter, key) => {
    const trimmed = value.trim();
    if (trimmed && !list.includes(trimmed)) {
      setter([...list, trimmed]);
      setFormData({ ...formData, [key]: "" });
    }
  };

  const removeChip = (idx, list, setter) =>
    setter(list.filter((_, i) => i !== idx));


  /* ─────────────── submit ─────────────── */
  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = new FormData();

       // Append primitive fields
       data.append("title", formData.title);
       data.append("summary", formData.summary);
       data.append("content", formData.content);
       data.append("source", formData.source);
     
       // Append arrays as multiple values
       category.forEach((item) => data.append("category", item));
       tag.forEach((item) => data.append("tags", item));
       author.forEach((item) => data.append("author", item));
     
       // Append the file if available
       if (formData.coverImage) {
         data.append("news_image", formData.coverImage);
       }

        try {
          const res = await axios.post(url , data ,{
              headers: {
                "Content-Type": "multipart/form-data",
              },
           });

          setFormData({
                  title: "",
                  summary: "",
                  content: "",
                  category: "",
                  tags: "",
                  author: "",
                  source: "",
                  coverImage: null,
                })     
          setAuthor([])         
          setTag([])
          setCategory([])
          setDisabled(true);
          toast.success(res?.data?.message)
          
        } catch (error) {
          console.log(error);
          toast.success(error?.message)
        }
  };

  /* reusable chip renderer */
  const ChipList = ({ data, onRemove, color = "blue" }) =>
    data.length ? (
      <div className="flex flex-wrap gap-2 mt-2">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`bg-${color}-100 text-${color}-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}
          >
            {item}
            <button
              onClick={() => onRemove(idx)}
              className={`text-${color}-700 hover:text-red-600 font-bold ml-1`}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    ) : null;

  /* ─────────────── UI ─────────────── */
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Upload New Article
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Summary */}
        <textarea
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
          rows={3}
          className="w-full border border-gray-300 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Content */}
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          rows={10}
          className="w-full border border-gray-300 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Category input + chips */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="category"
            placeholder="Add category"
            value={formData.category}
            onChange={handleChange}
            className="flex-1 border border-gray-300 p-3 rounded-lg"
          />
          <button
            type="button"
            onClick={() =>
              addChip(formData.category, category, setCategory, "category")
            }
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <ChipList
          data={category}
          onRemove={(idx) => removeChip(idx, category, setCategory)}
        />

        {/* Dropdown (toggle) */}
        <div className="my-4">
          <button
            type="button"
            onClick={() => setDisabled(!disabled)}
            className="text-blue-600 underline"
          >
            {disabled ? "Show Categories" : "Hide Categories"}
          </button>

          <div
            className={`${
              disabled ? "hidden" : "block"
            } border rounded-lg p-4 shadow-sm bg-gray-50 mt-2`}
          >
            {typeOfCategories.map((item) => (
              <span key={item} className="block py-1 text-gray-700">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Tags input + chips */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="tags"
            placeholder="Add tag"
            value={formData.tags}
            onChange={handleChange}
            className="flex-1 border border-gray-300 p-3 rounded-lg"
          />
          <button
            type="button"
            onClick={() => addChip(formData.tags, tag, setTag, "tags")}
            className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
          >
            Add
          </button>
        </div>

        <ChipList
          data={tag}
          onRemove={(idx) => removeChip(idx, tag, setTag)}
        //   color="green"
        />

        {/* Author input + chips */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="author"
            placeholder="Add author"
            value={formData.author}
            onChange={handleChange}
            className="flex-1 border border-gray-300 p-3 rounded-lg"
          />
          <button
            type="button"
            onClick={() => addChip(formData.author, author, setAuthor, "author")}
            className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700"
          >
            Add
          </button>
        </div>

        <ChipList
          data={author}
          onRemove={(idx) => removeChip(idx, author, setAuthor)}
        //   color="purple"
        />

        {/* Source */}
        <input
          type="text"
          name="source"
          placeholder="Source (optional)"
          value={formData.source}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Cover Image */}
        <input
          type="file"
          name="coverImage"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Article
        </button>
      </form>
    </div>
  );
};

export default UploadArticle;