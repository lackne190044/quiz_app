from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()


@app.get("/")
def root():
    return "Hello World"

@app.get("/values")
def getValues() -> list[list[int]]:
    return [[x for x in range(3)] for _ in range(3)]


if __name__ == "__main__":
    uvicorn.run("api:app", port=5000, host="0.0.0.0")