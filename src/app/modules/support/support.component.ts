import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface SupportOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: string;
  route?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  supportOptions: SupportOption[] = [
    {
      id: '1',
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: '💬',
      action: 'chat'
    },
    {
      id: '2',
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      icon: '📧',
      action: 'email'
    },
    {
      id: '3',
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      icon: '📞',
      action: 'phone'
    },
    {
      id: '4',
      title: 'Help Center',
      description: 'Browse our comprehensive help articles',
      icon: '📚',
      action: 'help'
    },
    {
      id: '5',
      title: 'Report Bug',
      description: 'Report issues or bugs you\'ve encountered',
      icon: '🐛',
      action: 'bug'
    },
    {
      id: '6',
      title: 'Feature Request',
      description: 'Suggest new features or improvements',
      icon: '💡',
      action: 'feature'
    }
  ];

  faqs: FAQ[] = [
    {
      id: '1',
      question: 'How do I earn points?',
      answer: 'You can earn points by completing tasks, playing games, and participating in challenges. Check your task list for available activities.',
      category: 'Points & Rewards'
    },
    {
      id: '2',
      question: 'How do I redeem rewards?',
      answer: 'Go to the Gift section to browse available offers. Click on any offer to see redemption details and requirements.',
      category: 'Points & Rewards'
    },
    {
      id: '3',
      question: 'Can I change my profile information?',
      answer: 'Yes, you can update your profile information anytime from the Profile section in the app.',
      category: 'Account'
    },
    {
      id: '4',
      question: 'How do I add friends?',
      answer: 'You can invite friends through the social features in the app. Look for the invite option in your profile or task list.',
      category: 'Social'
    },
    {
      id: '5',
      question: 'Why can\'t I access certain features?',
      answer: 'Some features may require completing certain tasks or reaching specific levels. Check your progress in the dashboard.',
      category: 'Technical'
    },
    {
      id: '6',
      question: 'How do I reset my password?',
      answer: 'Go to the login screen and tap "Forgot Password" to reset your password via email.',
      category: 'Account'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackClick(): void {
    window.history.back();
  }

  onSupportOptionClick(option: SupportOption): void {
    console.log('Support option clicked:', option);
    
    switch (option.action) {
      case 'chat':
        this.openLiveChat();
        break;
      case 'email':
        this.openEmailSupport();
        break;
      case 'phone':
        this.openPhoneSupport();
        break;
      case 'help':
        this.openHelpCenter();
        break;
      case 'bug':
        this.reportBug();
        break;
      case 'feature':
        this.requestFeature();
        break;
    }
  }

  onFAQClick(faq: FAQ): void {
    console.log('FAQ clicked:', faq);
    // Toggle FAQ answer visibility or navigate to detailed help
  }

  onBottomNavClick(navItemId: string): void {
    console.log('Bottom nav clicked:', navItemId);
  }

  private openLiveChat(): void {
    // Implement live chat functionality
    alert('Live chat feature coming soon!');
  }

  private openEmailSupport(): void {
    window.location.href = 'mailto:support@gamification.com?subject=Support Request';
  }

  private openPhoneSupport(): void {
    window.location.href = 'tel:+1234567890';
  }

  private openHelpCenter(): void {
    // Navigate to help center or show help articles
    alert('Help center coming soon!');
  }

  private reportBug(): void {
    // Open bug report form
    alert('Bug report form coming soon!');
  }

  private requestFeature(): void {
    // Open feature request form
    alert('Feature request form coming soon!');
  }
}
