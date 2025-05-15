// Old backend URL
// const BASE_URL = "https://ml-be-880p.onrender.com";
// New backend URL from FastAPI docs
const BASE_URL = "https://ml-be-880p.onrender.com";

export async function predict(
  endpoint: "disease" | "variety" | "age",
  file: File
) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BASE_URL}/predict/${endpoint}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return response.json();
}
