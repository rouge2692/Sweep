from app import app

if __name__ == "__main__":
    app.run(host="aws-0-ca-central-1.pooler.supabase.com", port=5432, debug=True)
