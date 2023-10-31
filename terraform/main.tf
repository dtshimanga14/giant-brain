terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {
  host    = "npipe:////.//pipe//docker_engine"
}

resource "docker_image" "giant-brain" {
  name         = "giant-brain"
  keep_locally = false
}

resource "docker_container" "giant-brain" {
  image = docker_image.giant-brain.image_id
  name  = "tutorial"

  ports {
    internal = 7000
    external = 8000
  }
}