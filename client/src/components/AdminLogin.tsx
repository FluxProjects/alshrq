import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface AdminLoginProps {
  onLogin: (username: string, password: string) => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Admin login attempt:", credentials.username);
    
    if (credentials.username && credentials.password) {
      onLogin(credentials.username, credentials.password);
    } else {
      toast({
        title: "Error",
        description: "Please enter both username and password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" data-testid="section-admin-login">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2" data-testid="text-admin-title">
            Admin Access
          </h1>
          <p className="text-muted-foreground text-sm" data-testid="text-admin-description">
            Enter your credentials to manage products
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="username" className="text-sm uppercase tracking-widest">
              Username
            </Label>
            <Input
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="mt-2"
              required
              data-testid="input-username"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-sm uppercase tracking-widest">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="mt-2"
              required
              data-testid="input-password"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" data-testid="button-login">
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}
