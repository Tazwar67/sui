window.BENCHMARK_DATA = {
  "lastUpdate": 1681152761155,
  "repoUrl": "https://github.com/MystenLabs/sui",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "brandon@mystenlabs.com",
            "name": "Brandon Williams",
            "username": "bmwill"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8576b4ff8af7ac1e59d3c741884d9d24deb7f866",
          "message": "format: check CheckpointSummary (#10666)",
          "timestamp": "2023-04-10T18:42:02Z",
          "tree_id": "e833b96d6e56d143f8f7b54ccc5b01cb7841c053",
          "url": "https://github.com/MystenLabs/sui/commit/8576b4ff8af7ac1e59d3c741884d9d24deb7f866"
        },
        "date": 1681152759411,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 186129211,
            "range": "± 13500624",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 513930,
            "range": "± 37195",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}