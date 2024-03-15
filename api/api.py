from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()


@app.get("/")
def root():
    return "Hello World"

@app.get("/categories")
def getValues() -> list[str]:
    return ["Buzzer", "Estimate", "Multiple Choice", "tmp1", "tmp2"]


if __name__ == "__main__":
    uvicorn.run("api:app", port=5000, host="0.0.0.0")