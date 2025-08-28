import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Clock, Mail, User, LogOut } from 'lucide-react';

const PendingApproval = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored auth data
    navigate('/auth/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <Card className="w-full max-w-lg animate-fade-in">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
          <CardTitle className="text-2xl">Pending Company Admin Approval</CardTitle>
          <CardDescription>
            Your registration is complete, but you need approval from your Company Administrator before you can access the platform.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <User className="h-4 w-4" />
            <AlertDescription>
              <strong>What happens next:</strong>
              <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
                <li>Your Company Admin will review your registration</li>
                <li>They'll assign you a role or create a new one based on your request</li>
                <li>You'll receive an email notification once approved</li>
                <li>You can then sign in and start using the platform</li>
              </ol>
            </AlertDescription>
          </Alert>

          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            <h4 className="font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Need to contact your admin?
            </h4>
            <p className="text-sm text-muted-foreground">
              If you have questions about your approval status, reach out to your Company Administrator or IT team. 
              They can check the status of your request and provide updates on the approval process.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center">
              Typical approval time: <span className="font-medium">1-3 business days</span>
            </p>
            <p className="text-xs text-muted-foreground text-center">
              You'll receive an email notification once your account is approved
            </p>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => window.location.reload()}
            >
              Check Status
            </Button>
            <Button 
              variant="ghost" 
              className="flex-1"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Having issues? Contact{' '}
              <a href="mailto:support@company.com" className="text-primary hover:underline">
                support@company.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PendingApproval;